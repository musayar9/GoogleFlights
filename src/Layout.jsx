import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import FilterContent from "./components/FilterContent";

const Layout = () => {
  return (
    <Container>
      <FilterContent />

      <Box sx={{ mt: 2 }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
