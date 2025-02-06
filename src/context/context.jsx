import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../utils/api";
import { formattedDate } from "../utils/functions";
import { useNavigate } from "react-router-dom";
const FlightsContext = createContext();

const FlightProvider = ({ children }) => {
  const [originSkyId, setOriginSkyId] = useState(null);
  const [destinationSkyId, setDestinationSkyId] = useState();
  const [originAirtport, setOriginAirPort] = useState({});
  const [destinationAirport, setDestinationAirport] = useState({});
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [oneWay, setOneWay] = useState(false);
  const [selectedOption, setSelectedOption] = useState("economy");
  const [errorMessage, setErrorMessage] = useState("");
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infantsSeat: 0,
  });

  console.log("oneWay", oneWay, "returnDate", returnDate);
  const navigation = useNavigate();
  const handleSearchFlight = async () => {
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

      console.log("res.data", res.data);
      setFlights(res.data);
      navigation("/result");
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
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
        departureDate,
        setDepartureDate,
        returnDate,
        setReturnDate,
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

export const useGlobalContext = () => {
  return useContext(FlightsContext);
};
