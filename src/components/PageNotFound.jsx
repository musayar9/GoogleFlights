import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "../assets/page_not_found.svg";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 20,
        marginBottom: 20,
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
        src={NotFound}
        alt={"pagenotfound"}
      />

      <Button onClick={() => navigate("/")}>
        <Typography textTransform={"capitalize"}>Return Home Page</Typography>
      </Button>
    </Box>
  );
};

export default PageNotFound;
