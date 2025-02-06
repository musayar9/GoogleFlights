import React from "react";
import { Outlet } from "react-router-dom"; 
import { Box, Container, Typography } from "@mui/material"; 
import FilterContent from "./components/FilterContent";

// Main layout component for the application
const Layout = () => {
  return (
    <Container>
      {/* A Material UI container that centers and pads the content */}
      <FilterContent /> {/* Renders the filtering options at the top */}
      {/* Box for additional content styling with margin-top */}
      <Box sx={{ mt: 2 }}>
    
        {/* Margin top of 2 spacing for content */}
        <Outlet />
        {/* Renders nested routes or child components inside the layout */}
      </Box>
    </Container>
  );
};

export default Layout;
