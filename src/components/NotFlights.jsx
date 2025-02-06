import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AirCraft from "../assets/aircraft.svg";
import { useNavigate } from "react-router-dom";
// If there is no flight information as a result of filtering, the field to be displayed is
const NotFlights = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        my: 20,
        gap: 2,
      }}
    >
      <Box
        component="img"
        sx={{
          width: 900,
          height: "100%",
          borderRadius: "10px",
          objectFit: "cover",
        }}
        src={AirCraft}
        alt={"aircraft"}
      />

      <Typography paddingTop={2} fontSize={24} color="error">
        Flights Not Found
      </Typography>
      <Button onClick={() => navigate("/")}>
        <Typography textTransform={"capitalize"}>Return Home Page</Typography>
      </Button>
    </Box>
  );
};

export default NotFlights;
