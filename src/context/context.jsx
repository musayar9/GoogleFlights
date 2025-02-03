import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const FlightsContext = createContext();

const FlightProvider = ({ children }) => {
  const [originSkyId, setOriginSkyId] = useState(null); // Kalkış noktası
  const [detinationSkyId, setDestinationSkyId] = useState(); // Varış noktası
  const [departureDate, setDepartureDate] = useState("2024-02-15"); // Gidiş tarihi
  const [returnDate, setReturnDate] = useState("2024-02-20"); // Dönüş tarihi
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const searchFlights = async () => {
  //       setLoading(true);
  //       try {
  //         const response = await axios.get(
  //           "https://sky-scanner3.p.rapidapi.com/api/v1/flights/searchFlights",
  //           {
  //             params: {
  //               from,
  //               to,
  //               date: departureDate, // Gidiş tarihi
  //               returnDate, // Dönüş tarihi
  //             },
  //             headers: {
  //               "X-RapidAPI-Key":
  //               
  //               "X-RapidAPI-Host": "sky-scanner3.p.rapidapi.com",
  //             },
  //           }
  //         );
  //         console.log(response.data, "ssfasd");
  //         setFlights(response.data); // API'den gelen uçuşları al ve state'e ata
  //       } catch (error) {
  //         console.error("API Hatası:", error); // Hata durumunu konsola yazdır
  //       }
  //       setLoading(false); // Yükleniyor durumunu sonlandır
  //     };
  //     searchFlights();
  //   }, []);

  return (
    <FlightsContext.Provider
      value={{
        flights,
        originSkyId,
        setOriginSkyId,
        detinationSkyId,
        setDestinationSkyId,
        setDepartureDate,
        setReturnDate,
        departureDate,
        returnDate,
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
