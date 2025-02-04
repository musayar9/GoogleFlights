import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterContent from "./components/FilterContent";
import Result from "./components/Result";
import Home from "./components/Home";
import { Box, Typography } from "@mui/material";
const App = () => {
  return (
    <Box
      sx={{
        maxWidth: "90vw",
        width: "1200px",
        marginX: "auto",
      }}
    >
      <FilterContent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
