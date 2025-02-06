import React from "react";
import recommendations from "../utils/data/recommendations.json";
import { Box, Typography } from "@mui/material";
import { formatDuration, formatShortDate } from "../utils/functions";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
const Recommendations = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        gap: 3,
        marginTop: 5,
      }}
    >
      {recommendations.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: { xs: "100%", md: "25%" },
            display: "flex",
            flexDirection: { sx: "row", md: "column" },
            gap: 1,
          }}
        >
          <Box
            component="img"
            sx={{
              width: { xs: 150, md: "100%" },
              height: 120,
              borderRadius: "10px",
              objectFit: "cover",
            }}
            src={item.image}
            alt={item.city}
          />
          <Box xs={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 1,
                width: { xs: "110%", md: "auto" },
              }}
            >
              <Typography fontWeight={550}>{item.city}</Typography>
              <Typography fontWeight={550} color={"#212224"}>
                ${item.price}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                gap: 1,
              }}
            >
              <Typography sx={{ fontSize: { xs: 14, md: 15 } }} color="#777">
                {formatShortDate(item.departureDate)}
              </Typography>
              <HorizontalRuleIcon sx={{ fontSize: 4, width: 5 }} />
              <Typography sx={{ fontSize: { xs: 14, md: 15 } }} color="#777">
                {formatShortDate(item.arrivalDate)}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                gap: 1,
              }}
            >
              <Typography sx={{ fontSize: { xs: 14, md: 15 } }} color="#777">
                {item.flightType}
              </Typography>
              <FiberManualRecordIcon sx={{ fontSize: 2 }} />
              <Typography sx={{ fontSize: { xs: 14, md: 15 } }} color="#777">
                {formatDuration(item.durationInMinutes)}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Recommendations;
