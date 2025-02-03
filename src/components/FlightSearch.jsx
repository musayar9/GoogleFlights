import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useGlobalContext } from "../context/context";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import FormFlightType from "./FormFlightType";
import FromClassType from "./FormClassType";
import FormPerson from "./FormPerson";

const FlightSearch = () => {
  const { originSkyId, setOriginSkyId, detinationSkyId, setDestinationSkyId } =
    useGlobalContext();
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    const searchFlights = async () => {
      try {
        const response = await axios.get(
          "https://sky-scanner3.p.rapidapi.com/flights/airports",
          {
            headers: {
              "X-RapidAPI-Key":"",
    
              "X-RapidAPI-Host": "sky-scanner3.p.rapidapi.com", 
            },
          }
        );
        const data = response.data;
        setAirports(data.data);
      } catch (error) {
        console.error("API Hatası:", error); 
      }
    };

    searchFlights();
  }, []);
  console.log("data", airports);

  return (
    <Box
      sx={{
        marginTop: 10,
        border: "1px solid #f0f0f0",
        borderRadius: 4,
        boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.2)", 
        gap: 8,
        padding: 2,
        backgroundColor: "white", 
      }}
    >
      
      <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
        <FormFlightType />
        <FormPerson />
        <FromClassType />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 2,
          paddingTop: 2,
        }}
      >
        <Autocomplete
          disablePortal
          options={airports.filter(
            (airport) =>
              airport.id !== null && airport.skyId !== detinationSkyId
          )}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          getOptionKey={(option, index) => `${option.id}-${index}`}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label={"Nereden"} />}
          onChange={(event, newValue) => {
            if (newValue) {
              setOriginSkyId(newValue.skyId);
            }
          }}
        />

        <Autocomplete
          disablePortal
          options={airports.filter(
            (airport) => airport.id !== null && airport.skyId !== originSkyId
          )}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ width: 300 }}
          getOptionKey={(option, index) => `${option.id}-${index}`}
          renderInput={(params) => <TextField {...params} label={"Nereye"} />}
          onChange={(event, newValue) => {
            if (newValue) {
              setDestinationSkyId(newValue.skyId);
            }
          }}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label={"Gidiş"} />
          <DatePicker label={"Dönüş"} />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default FlightSearch;
