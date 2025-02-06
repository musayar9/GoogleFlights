import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "../assets/flights.svg";
import FlightSearch from "./FlightSearch";

const FilterContent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Box
        component="img"
        sx={{
          width: "100%",
          maxWidth: isSmallScreen ? 400 : isMediumScreen ? 600 : 1200,
          height: isSmallScreen ? 150 : isMediumScreen ? 250 : 300,
          objectFit: "cover",
        }}
        src={Image}
        alt="Flights"
      />
      <Typography
        sx={{
          mt: isSmallScreen ? -5 : -10,
          fontSize: isSmallScreen ? "1.5rem" : isMediumScreen ? "2rem" : "3rem", textAlign:"center"
        }}
        variant="h2"
        
      >
        Flights
      </Typography>
      <FlightSearch />
    </Box>
  );
};

export default FilterContent;
