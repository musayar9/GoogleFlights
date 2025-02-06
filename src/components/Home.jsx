import React from "react";
import MapComponent from "./MapComponent";
import { Box, Button, Container, Typography } from "@mui/material";
import Recommendations from "./Recommendations";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

// Array of cities with their respective IDs
const city = [
  {
    id: 1,
    cityName: "Istanbul",
  },
  { id: 2, cityName: "Ankara" },
  { id: 3, cityName: "Bursa" },
  { id: 4, cityName: "Izmir" },
];

const Home = () => {
  const { loading } = useGlobalContext(); // Retrieve loading state from global context

  if (loading) {
    return <Loading />; // Show loading component if data is still being fetched
  }

  return (
    <Box
      sx={{
        marginTop: 10,
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {/* Title Section */}
      <Typography variant="h5">
        Find the lowest-priced flights departing from Istanbul
      </Typography>

      {/* City Selection Buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          paddingTop: 1,
          paddingBottom: 1,
        }}
      >
        {city.map((item) => (
          <Button
            sx={{
              borderRadius: 10,
              fontSize: 12,
              border: "1px solid ",
              borderColor: item.id === 1 ? "primary" : "#777",
              color: item.id === 1 ? "primary" : "#777",
              paddingRight: 3,
              paddingLeft: 3,
              backgroundColor: item.id === 1 && "primary",
            }}
            key={item.id}
          >
            {item.cityName} {/* Display city name on button */}
          </Button>
        ))}
      </Box>

      {/* Map Component */}
      <MapComponent />

      {/* Recommendations Component */}
      <Recommendations />
    </Box>
  );
};

export default Home;
