import React from "react";

import { Box, Typography } from "@mui/material";
import Image from "../assets/flights.svg";
import FlightSearch from "./FlightSearch";

const FilterContent = () => {
  return (
    <Box>
      <Box
        component="img"
        sx={{
          width: 1200,
          height: 300,
          borderRadius: "10px",
          objectFit: "cover",
        }}
        src={Image}
        alt="ımage"
      />
      <Typography sx={{ textAlign: "center", marginTop: -10 }} variant="h2">
        Flights
      </Typography>
      <FlightSearch />
    </Box>
  );
};

export default FilterContent;
