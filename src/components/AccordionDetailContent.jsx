import { Box, Typography } from '@mui/material';
import React from 'react'
import { formatDuration, formatHour, formatLongDate } from '../utils/functions';
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import PublicIcon from "@mui/icons-material/Public";
const AccordionDetailContent = ({item}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { md: "space-between" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          flexDirection: "column",
          paddingLeft: { md: "160px" },
        }}
      >
        <Box className="flight-left-content">
          <FlightTakeoffIcon sx={{ fontSize: "48px", color: "#1a73e8" }} />
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: { xs: 16, md: 18 } }}>
              {formatLongDate(item.legs?.[0].departure)}
            </Typography>
            <Box className="flight-row">
              <Typography
                sx={{ fontWeight: 500, fontSize: { xs: 14, md: 16 } }}
              >
                {formatHour(item.legs?.[0].departure)}
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
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography sx={{ fontSize: { xs: 14, md: 15 }, color: "#777", py: 2 }}>
          Travel time:
          {formatDuration(item.legs?.[0].durationInMinutes)}
        </Typography>

        <Box className="flight-left-content">
          <FlightLandIcon sx={{ fontSize: "48px", color: "#1a73e8" }} />
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: { xs: 16, md: 18 } }}>
              {formatLongDate(item.legs?.[0].arrival)}
            </Typography>
            <Box className="flight-row">
              <Typography
                sx={{ fontWeight: 600, fontSize: { xs: 16, md: 18 } }}
              >
                {formatHour(item.legs?.[0].arrival)}
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
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography
          fontSize={14}
          color="#777"
          textTransform={"capitalize"}
          my={2}
        >
          {item.legs[0].carriers.marketing[0].name} •
          {selectedOptions || "economy"}
        </Typography>
      </Box>
      <Box className="flight-right">
        <Box className="flight-row">
          <AirlineSeatLegroomExtraIcon sx={{ color: "#606469" }} />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: 13, md: 14 },
              color: "#202124",
            }}
          >
            Below average legroom (71 cm)
          </Typography>
        </Box>
        <div className="flight-row">
          <TapAndPlayIcon sx={{ color: "#606469" }} />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: 13, md: 14 },
              color: "#202124",
            }}
          >
            Stream media content to your device
          </Typography>
        </div>
        <div className="flight-row">
          <PublicIcon sx={{ color: "#606469" }} />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: 13, md: 14 },
              color: "#202124",
            }}
          >
            Estimated Emission: 47 kg CO2e
          </Typography>
        </div>
      </Box>
    </Box>
  );
}

export default AccordionDetailContent
