import React from "react";
import { Outlet } from "react-router-dom"; // Used to render child routes in a nested route structure
import { Box, Container, Typography } from "@mui/material"; // Material UI components for layout and styling
import FilterContent from "./components/FilterContent"; // Import FilterContent component for filtering options

// Main layout component for the application
const Layout = () => {
  return (
    <Container>

      {/* A Material UI container that centers and pads the content */}
      <FilterContent /> {/* Renders the filtering options at the top */}
      {/* Box for additional content styling with margin-top */}
      <Box sx={{ mt: 2 }}>
        {" "}
        {/* Margin top of 2 spacing for content */}
        <Outlet />{" "}
        {/* Renders nested routes or child components inside the layout */}
      </Box>
    </Container>
  );
};

export default Layout;
