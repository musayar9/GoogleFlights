import React from "react";
import { useGlobalContext } from "./context/context";
import FlightSearch from "./components/FlightSearch";
import { Box, Typography } from "@mui/material";
import Image from "./assets/flights.svg";
const App = () => {
  return (
    <Box
      sx={{
        maxWidth: "90vw",
        width: "1200px",
        marginX: "auto",
      }}
    >
      <Box
        component="img"
        sx={{
          width: 1200,
          height: 300,
          borderRadius: "10px",
          objectFit: "cover",
        }}
        src={Image}
        alt="Örnek Resim"
      />
      <Typography sx={{textAlign:"center", marginTop:-10}} variant="h2">Uçuşlar</Typography>
      <FlightSearch />
    </Box>
  );
};

export default App;
