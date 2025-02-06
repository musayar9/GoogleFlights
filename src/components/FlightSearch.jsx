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
  // Destructuring context values and functions for managing flight search state
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

  // State for storing airport data and loading status
  const [airports, setAirports] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  // Function to fetch airport data when the Autocomplete field is focused
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
      setAirports(data.data); // Set the fetched airport data
      setIsLoading(false);
    } catch (error) {
      console.error("API Error:", error);
      setIsLoading(false);
    }
  };

  // Function to handle origin airport selection
  const handleOrigin = async (newValue) => {
    setOriginSkyId(newValue); // Set the selected origin airport ID
    try {
      const res = await api.get("/v1/flights/searchAirport", {
        params: { query: newValue },
      });
      setOriginAirPort(res.data.data[0]); // Set the origin airport details
    } catch (error) {
      console.log(error, "error");
    }
  };

  // Function to handle destination airport selection
  const handleDestination = async (newValue) => {
    setDestinationSkyId(newValue); // Set the selected destination airport ID
    try {
      const res = await api.get("/v1/flights/searchAirport", {
        params: { query: newValue },
      });
      setDestinationAirport(res.data.data[0]); // Set the destination airport details
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <Box
      sx={{
        mt: 10,
        border: "1px solid #f0f0f0",
        borderRadius: 2,
        boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.2)",
        gap: 4,
        p: 2,
        backgroundColor: "white",
        paddingBottom: 6,
        position: "relative",
      }}
    >
      {/* Flight type, passenger, and class selection section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { sx: 0, md: 2 },
          my: 2,
        }}
      >
        <FormFlightType />
        <FormPerson />
        <FromClassType />
      </Box>

      {/* Main search section with origin, destination, and date pickers */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" }, // Responsive layout
          gap: 2,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: 2,
          }}
        >
          {/* Autocomplete for origin airport */}
          <Autocomplete
            disablePortal
            options={airports.filter(
              (airport) =>
                airport.id !== null && airport.skyId !== destinationSkyId
            )}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionKey={(option, index) => `${option.id}-${index}`}
            sx={{ width: { xs: "100%", md: 300 } }} // Responsive width
            renderInput={(params) => (
              <TextField {...params} label={"From Where"} />
            )}
            noOptionsText={isloading ? "Loading..." : "No options"}
            onChange={(event, newValue) => {
              if (newValue) {
                handleOrigin(newValue.skyId); // Handle origin selection
              }
            }}
            onFocus={handleFocus} // Fetch airports on focus
          />

          {/* Autocomplete for destination airport */}
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
                handleDestination(newValue.skyId); // Handle destination selection
              }
            }}
            onFocus={handleFocus} // Fetch airports on focus
          />
        </Box>

        {/* Date pickers for departure and return dates */}
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
              onChange={(date) => setDepartureDate(date)} // Set departure date
              sx={{ width: { xs: "100%", md: oneWay ? "100%" : "75%" } }}
            />
            {!oneWay && ( // Show return date picker only if it's not a one-way trip
              <DatePicker
                disablePast
                label={"Return"}
                value={returnDate}
                onChange={(date) => setReturnDate(date)} // Set return date
                sx={{ width: { xs: "100%", md: oneWay ? "100%" : "75%" } }}
              />
            )}
          </Box>
        </LocalizationProvider>
      </Box>

      {/* Search button */}
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: -20,
          left: { xs: "35%", md: "45%" },
          backgroundColor: "#1a73e8",
          paddingLeft: 2,
          paddingRight: 2,
          borderRadius: 20,
          color: "white",
        }}
        onClick={handleSearchFlight} // Trigger flight search
      >
        <Search />
        <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
          {originSkyId && destinationSkyId ? "Search" : "Discover"}
        </Typography>
      </Button>

      {/* Display error message if any */}
      {errorMessage && (
        <Alert sx={{ mt: 2 }} severity="error">
          {errorMessage}
        </Alert>
      )}
    </Box>
  );
};

export default FlightSearch;
