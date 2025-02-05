import React from "react";
import MapComponent from "./MapComponent";
import { Box, Button, Container, Typography } from "@mui/material";

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
      <Typography variant="h5">
        Find the lowest-priced flights departing from Istanbul
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, paddingTop:1, paddingBottom:1 }}>
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
            {item.cityName}
          </Button>
        ))}
      </Box>
      <MapComponent />
    </Box>
  );
};

export default Home;
