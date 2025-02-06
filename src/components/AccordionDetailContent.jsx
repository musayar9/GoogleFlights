import { Box, Typography } from "@mui/material";
import React from "react";
import { formatDuration, formatHour, formatLongDate } from "../utils/functions"; // Import utility functions to format duration, hour, and long date
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import PublicIcon from "@mui/icons-material/Public";
import { useGlobalContext } from "../context/context";

// This component renders the flight details in an accordion-style layout.
const AccordionDetailContent = ({ item }) => {
  const { selectedOptions } = useGlobalContext();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens, horizontally on larger ones
        justifyContent: { md: "space-between" }, // Space out items on larger screens
      }}
    >
      {/* Left side - Departure Information */}
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          flexDirection: "column",
          paddingLeft: { md: "160px" }, // Left padding on larger screens
        }}
      >
        {/* Departure time and location */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FlightTakeoffIcon sx={{ fontSize: "48px", color: "#1a73e8" }} />
          {/* Icon for flight takeoff */}
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: { xs: 16, md: 18 } }}>
              {formatLongDate(item.legs?.[0].departure)}
              {/* Format and display the departure date */}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{ fontWeight: 500, fontSize: { xs: 14, md: 16 } }}
              >
                {formatHour(item.legs?.[0].departure)}
                {/* Format and display the departure time */}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 14, md: 16 },
                  color: "#202124",
                }}
              >
                {item.legs?.[0].origin.name} (
                {item.legs?.[0].origin.displayCode})
                {/* Display departure location */}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Travel time information */}
        <Typography sx={{ fontSize: { xs: 14, md: 15 }, color: "#777", py: 2 }}>
          Travel time: {formatDuration(item.legs?.[0].durationInMinutes)}{" "}
          {/* Format and display travel time */}
        </Typography>

        {/* Arrival time and location */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FlightLandIcon sx={{ fontSize: "48px", color: "#1a73e8" }} />
          {/* Icon for flight arrival */}
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: { xs: 16, md: 18 } }}>
              {formatLongDate(item.legs?.[0].arrival)}
              {/* Format and display the arrival date */}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{ fontWeight: 600, fontSize: { xs: 16, md: 18 } }}
              >
                {formatHour(item.legs?.[0].arrival)}
                {/* Format and display the arrival time */}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 14, md: 16 },
                  color: "#202124",
                }}
              >
                {item.legs?.[0].destination.name} (
                {item.legs?.[0].destination.displayCode})
                {/* Display arrival location */}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Carrier and class type information */}
        <Typography
          fontSize={14}
          color="#777"
          textTransform={"capitalize"}
          my={2}
        >
          {item.legs[0].carriers.marketing[0].name} •
          {selectedOptions || "economy"}{" "}
          {/* Display airline carrier and selected class */}
        </Typography>
      </Box>

      {/* Right side - Additional Information */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Legroom information */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <AirlineSeatLegroomExtraIcon sx={{ color: "#606469" }} />
          {/* Icon for legroom information */}
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: 13, md: 14 },
              color: "#202124",
            }}
          >
            Below average legroom (71 cm) {/* Display legroom information */}
          </Typography>
        </Box>

        {/* Media streaming information */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <TapAndPlayIcon sx={{ color: "#606469" }} />
          {/* Icon for media streaming */}
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: 13, md: 14 },
              color: "#202124",
            }}
          >
            Stream media content to your device
            {/* Display media streaming information */}
          </Typography>
        </Box>

        {/* Estimated emission information */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <PublicIcon sx={{ color: "#606469" }} />
          {/* Icon for emission information */}
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: 13, md: 14 },
              color: "#202124",
            }}
          >
            Estimated Emission: 47 kg CO2e
            {/* Display CO2 emissions information */}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AccordionDetailContent;
