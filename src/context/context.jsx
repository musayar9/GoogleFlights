import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../utils/api";
import { formattedDate } from "../utils/functions";
import { useNavigate } from "react-router-dom";

// created FlightContext for state management
const FlightsContext = createContext();

const FlightProvider = ({ children }) => {
  // // SkyScanner IDs of departure and destinations points
  const [originSkyId, setOriginSkyId] = useState(null);
  const [destinationSkyId, setDestinationSkyId] = useState();
  // User selected airport information
  const [originAirtport, setOriginAirPort] = useState({});
  const [destinationAirport, setDestinationAirport] = useState({});
  // Flight Dates
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  // Flight results and load status
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  //Whether the user will choose a one-way flight or a round trip
  const [oneWay, setOneWay] = useState(false);
  // Cabin class selected by the user (economy, business, etc.)
  const [selectedOption, setSelectedOption] = useState("economy");
  // Error message controllers
  const [errorMessage, setErrorMessage] = useState("");
  // Passenger information (adult, child, infant)
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infantsSeat: 0,
  });

  const navigation = useNavigate();

  // Function that allows the user to search for flights
  const handleSearchFlight = async () => {
    // If there is missing information from the user, an error message is displayed
    if (!originSkyId) {
      setErrorMessage("Please enter where you will be traveling from.");
      return;
    }
    if (!destinationSkyId) {
      setErrorMessage("Please enter where you will be traveling to");
      return;
    }
    if (!departureDate) {
      setErrorMessage("Please enter the departure date.");
      return;
    }

    try {
      setLoading(true);
      // Sending API request for flights
      navigation("/result");
      const res = await api.get(`/v2/flights/searchFlights`, {
        params: {
          originSkyId: originSkyId,
          destinationSkyId: destinationSkyId,
          originEntityId: originAirtport.entityId,
          destinationEntityId: destinationAirport.entityId,
          cabinClass: selectedOption,
          date: formattedDate(departureDate),
          ...(oneWay ? {} : { returnDate: formattedDate(returnDate) }),

          adults: passengers.adults,
          childrens: passengers.children,
          infants: passengers.infantsSeat,
          sortBy: "best",
          currency: "USD",
          market: "en-US",
          countryCode: "US",
        },
      });

      setFlights(res.data);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Automatically clear error message after 3 seconds
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  }, [errorMessage]);
  return (
    <FlightsContext.Provider
      value={{
        flights,
        setFlights,
        originSkyId,
        setOriginSkyId,
        destinationSkyId,
        setDestinationSkyId,
        setDepartureDate,
        setReturnDate,
        departureDate,
        returnDate,
        originAirtport,
        setOriginAirPort,
        destinationAirport,
        setDestinationAirport,
        selectedOption,
        setSelectedOption,
        passengers,
        setPassengers,
        oneWay,
        setOneWay,
        loading,
        handleSearchFlight,
        errorMessage,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightProvider;

//Custom hook for components that will use FlightsContext
export const useGlobalContext = () => {
  return useContext(FlightsContext);
};
