import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useGlobalContext } from "../context/context";

import dayjs from "dayjs";
import FormFlightType from "./FormFlightType";
import FromClassType from "./FormClassType";
import FormPerson from "./FormPerson";
import { api } from "../utils/api";
import { Alert, Button, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

const FlightSearch = () => {
  const {
    originSkyId,
    setOriginSkyId,
    destinationSkyId,
    setDestinationSkyId,
    setOriginAirPort,
    oneWay,
    setDestinationAirport,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    errorMessage,
    handleSearchFlight,
  } = useGlobalContext();
  const [airports, setAirports] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const today = dayjs();
  const handleFocus = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://sky-scanner3.p.rapidapi.com/flights/airports",
        {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,

            "X-RapidAPI-Host": "sky-scanner3.p.rapidapi.com",
          },
        }
      );
      const data = await response.data;
      setAirports(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("API Hatası:", error);
      setIsLoading(false);
    }
  };

  const handleOrigin = async (newValue) => {
    setOriginSkyId(newValue);
    console.log("newValue", newValue);
    try {
      const res = await api.get("/v1/flights/searchAirport", {
        params: { query: newValue },
      });
      setOriginAirPort(res.data.data[0]);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleDestination = async (newValue) => {
    setDestinationSkyId(newValue);
    console.log("newValue", newValue);
    try {
      const res = await api.get("/v1/flights/searchAirport", {
        params: { query: newValue },
      });
      setDestinationAirport(res.data.data[0]);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <Box
      sx={{
        marginTop: 10,
        border: "1px solid #f0f0f0",
        borderRadius: 2,
        boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.2)",
        gap: 4,
        padding: 2,
        backgroundColor: "white",
        paddingBottom: 6,
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, top: "-10px" }}>
        <FormFlightType />
        <FormPerson />
        <FromClassType />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" }, // Küçük ekranda column, büyükte row
          gap: 2,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
          width:"100%",
            gap: 2,
          }}
        >
          <Autocomplete
            disablePortal
            options={airports.filter(
              (airport) =>
                airport.id !== null && airport.skyId !== destinationSkyId
            )}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionKey={(option, index) => `${option.id}-${index}`}
            sx={{ width: { xs: "100%", md: 300 } }} // Küçük ekranda tam genişlik, büyükte 300px
            renderInput={(params) => (
              <TextField {...params} label={"From Where"} />
            )}
            noOptionsText={isloading ? "Loading..." : "No options"}
            onChange={(event, newValue) => {
              if (newValue) {
                handleOrigin(newValue.skyId);
              }
            }}
            onFocus={handleFocus}
          />

          <Autocomplete
            disablePortal
            options={airports.filter(
              (airport) => airport.id !== null && airport.skyId !== originSkyId
            )}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionKey={(option, index) => `${option.id}-${index}`}
            sx={{ width: { xs: "100%", md: 300 } }}
            renderInput={(params) => (
              <TextField {...params} label={"To Where"} />
            )}
            noOptionsText={isloading ? "Loading..." : "No options"}
            onChange={(event, newValue) => {
              if (newValue) {
                handleDestination(newValue.skyId);
              }
            }}
            onFocus={handleFocus}
          />
        </Box>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            sx={{
              display: "flex",
             
              gap: 2,
              width: "100%",
            }}
          >
            <DatePicker
              monthsPerRow={4}
              disablePast
              label={"Departure"}
              value={departureDate}
              onChange={(date) => setDepartureDate(date)}
              sx={{ width: { xs: "100%", md: oneWay ? "50%" : "75%" } }}
            />
            {!oneWay && (
              <DatePicker
                disablePast
                label={"Return"}
                value={returnDate}
                onChange={(date) => setReturnDate(date)}
                sx={{ width: { xs: "100%", md: oneWay ? "50%" : "75%" } }}
              />
            )}
          </Box>
        </LocalizationProvider>
      </Box>

      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: -20,
          left: "45%",
          backgroundColor: "#1a73e8",
          paddingLeft: 2,
          paddingRight: 2,
          borderRadius: 20,
          color: "white",
        }}
        onClick={handleSearchFlight}
      >
        <Search />
        <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
          {originSkyId && destinationSkyId ? "Search" : "Discover"}
        </Typography>
      </Button>
      {errorMessage && (
        <Alert sx={{ mt: 2 }} severity="error">
          {errorMessage}
        </Alert>
      )}
    </Box>
  );
};

export default FlightSearch;
