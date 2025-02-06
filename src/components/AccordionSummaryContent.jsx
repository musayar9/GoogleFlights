import { Box, Typography } from "@mui/material";
import React from "react";
import { formatDuration, formatHour } from "../utils/functions";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const AccordionSummaryContent = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",

        width: "100%",
        justifyContent: "space-between",
        paddingLeft: { md: "10px" },
        paddingRight: { md: "10px" },
      }}
    >
      {item.legs?.[0]?.carriers?.marketing?.[0]?.logoUrl && (
        <img
          className="flight_img"
          src={item.legs[0].carriers.marketing[0].logoUrl}
          alt={item.legs[0].carriers.marketing[0].name}
        />
      )}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontWeight={600} fontSize={18}>
            {formatHour(item.legs?.[0].departure)}
          </Typography>
          <HorizontalRuleIcon sx={{ display: { xs: "none", md: "flex" } }} />
          <ArrowRightAltIcon sx={{ display: { xs: "flex", md: "none" } }} />
          <Typography fontWeight={600} fontSize={18}>
            {formatHour(item.legs?.[0].arrival)}
          </Typography>
        </Box>
        <Typography
          fontSize={14}
          sx={{ display: { xs: "none", md: "flex" } }}
          color={"#a1a3a4"}
        >
          {item.legs[0].carriers.marketing[0].name}
        </Typography>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
          }}
        >
          <Typography fontSize={14} color={"#a1a3a4"}>
            {item.legs?.[0]?.origin.displayCode}
          </Typography>
          <HorizontalRuleIcon sx={{ color: "#a1a3a4" }} />
          <Typography fontSize={14} color={"#a1a3a4"}>
            {item.legs?.[0]?.destination.displayCode}
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 500,
              color: "#212224",
            }}
          >
            {item.legs?.[0].stopCount === 0 ? "Non-stop" : "Connecting"}
          </Typography>
          <FiberManualRecordIcon sx={{ fontSize: 2 }} />
          <Typography
            sx={{
              fontWeight: 600,
              color: "#212224",
              fontSize: 11,
            }}
          >
            {formatDuration(item.legs?.[0].durationInMinutes)}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: 12,
            color: "#a1a3a4",
            display: { xs: "flex", md: "none" },
          }}
        >
          {item.legs[0].carriers.marketing[0].name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          fontWeight={600}
          fontSize={18}
          color={"#212224"}
          marginTop={0}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {formatDuration(item.legs?.[0].durationInMinutes)}
        </Typography>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
          }}
        >
          <Typography fontSize={14} color={"#a1a3a4"}>
            {item.legs?.[0]?.origin.displayCode}
          </Typography>
          <HorizontalRuleIcon sx={{ color: "#a1a3a4" }} />
          <Typography fontSize={14} color={"#a1a3a4"}>
            {item.legs?.[0]?.destination.displayCode}
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{
            display: { xs: "none", md: "flex" },
            fontSize: 18,
            fontWeight: 500,
            color: "#212224",
          }}
        >
          {item.legs?.[0].stopCount === 0 ? "Non-stop" : "Connecting"}
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize={18} color={"#212224"}>
          47 kg CO2e
        </Typography>
        <Typography
          sx={{
            backgroundColor: "#e6f4ea",
            padding: "5px",
            borderRadius: "4px",
            color: "#0d652d",
            fontSize: 14,
          }}
        >
          -30% emissions
        </Typography>
      </Box>
      <Box sx={{ textAlign: { xs: "right", md: "center" } }}>
        <Typography fontSize={18} color="#1a834a" fontWeight={600}>
          {item.price.formatted}
        </Typography>
        <Typography
          fontSize={14}
          fontWeight={500}
          color={"#a1a3a4"}
          className="flight-info__flightStatus"
        >
          {item.legs.length > 1 ? "Round-trip" : "One Way"}
        </Typography>
        <Typography
          sx={{
            backgroundColor: "#e6f4ea",
            padding: "5px",
            borderRadius: "4px",
            color: "#0d652d",
            fontSize: 11,
            display: { xs: "flex", md: "none" },
          }}
        >
          -30% emissions
        </Typography>
      </Box>
    </Box>
  );
};

export default AccordionSummaryContent;
