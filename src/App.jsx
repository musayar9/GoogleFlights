import React from "react";
import { Routes, Route } from "react-router-dom";
import FilterContent from "./components/FilterContent";
import Result from "./components/Result";
import Home from "./components/Home";
import { Box, Container, Typography } from "@mui/material";
const App = () => {
  return (
    <Container
      // sx={{
      //   maxWidth: "90vw",
      //   width: "1200px",
      //   marginX: "auto",
      // }}
    >
      <FilterContent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Container>
  );
};

export default App;
