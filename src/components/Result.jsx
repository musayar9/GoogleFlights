import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useGlobalContext } from "../context/context";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { formatDuration, formatHour, formatLongDate } from "../utils/functions";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import PublicIcon from "@mui/icons-material/Public";
import Loading from "./Loading";
import NotFlights from "./NotFlights";
const Result = () => {
  const { flights, selectedOptions, loading } = useGlobalContext();

  console.log(flights, "flights");
  if (loading) {
    return <Loading />;
  }

  if (flights?.data?.itineraries?.length === 0 || flights.status === "false") {
    return <NotFlights />;
  }

  return (
    <div className="accordion-container">
      {flights?.data?.itineraries?.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                width: "100%",
                justifyContent: "space-between",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              {item.legs?.[0]?.carriers?.marketing?.[0]?.logoUrl && (
                <img
                  className="flight_img"
                  src={item.legs[0].carriers.marketing[0].logoUrl}
                  alt={item.legs[0].carriers.marketing[0].name}
                />
              )}
              <div>
                <div className="flight-info">
                  <Typography fontWeight={600} fontSize={18}>
                    {formatHour(item.legs?.[0].departure)}
                  </Typography>
                  <HorizontalRuleIcon />
                  <Typography fontWeight={600} fontSize={18}>
                    {formatHour(item.legs?.[0].arrival)}
                  </Typography>
                </div>
                <Typography fontSize={14} color={"#a1a3a4"}>
                  {item.legs[0].carriers.marketing[0].name}
                </Typography>
              </div>
              <div className="flight-duration">
                <Typography
                  fontWeight={600}
                  fontSize={18}
                  color={"#212224"}
                  marginTop={0}
                >
                  {formatDuration(item.legs?.[0].durationInMinutes)}
                </Typography>
                <div className="flight-duration__time">
                  <Typography fontSize={14} color={"#a1a3a4"}>
                    {item.legs?.[0]?.origin.displayCode}
                  </Typography>
                  <HorizontalRuleIcon sx={{ color: "#a1a3a4" }} />
                  <Typography fontSize={14} color={"#a1a3a4"}>
                    {item.legs?.[0]?.destination.displayCode}
                  </Typography>
                </div>
              </div>

              <div>
                <Typography fontSize={18} fontWeight={500} color={"#212224"}>
                  {item.legs?.[0].stopCount === 0 ? "Non-stop" : "Connecting"}
                </Typography>
              </div>
              <div className="flight-emissions">
                <Typography fontSize={18} color={"#212224"}>
                  47 kg CO2e
                </Typography>
                <Typography
                  fontSize={14}
                  className="flight-info__emission-amount"
                >
                  -30% emissions
                </Typography>
              </div>
              <div className="flight-info__price">
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
              </div>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flight-card">
              <div className="flight-left">
                <div className="flight-left-content">
                  <FlightTakeoffIcon
                    sx={{ fontSize: "48px", color: "#1a73e8" }}
                  />
                  <div>
                    <Typography fontWeight={600}>
                      {formatLongDate(item.legs?.[0].departure)}
                    </Typography>
                    <div className="flight-row">
                      <Typography fontSize={18} fontWeight={500}>
                        {formatHour(item.legs?.[0].departure)}
                      </Typography>
                      <Typography fontSize={16} color="#202124">
                        {item.legs?.[0].origin.name} (
                        {item.legs?.[0].origin.displayCode})
                      </Typography>
                    </div>
                  </div>
                </div>

                <Typography
                  fontSize={15}
                  color="#777"
                  className="flight-duration"
                >
                  Travel time:
                  {formatDuration(item.legs?.[0].durationInMinutes)}
                </Typography>

                <div className="flight-left-content">
                  <FlightLandIcon sx={{ fontSize: "48px", color: "#1a73e8" }} />
                  <div>
                    <Typography fontWeight={600}>
                      {formatLongDate(item.legs?.[0].arrival)}
                    </Typography>
                    <div className="flight-row">
                      <Typography fontSize={18} fontWeight={500}>
                        {formatHour(item.legs?.[0].arrival)}
                      </Typography>
                      <Typography fontSize={16} color="#202124">
                        {item.legs?.[0].destination.name} (
                        {item.legs?.[0].destination.displayCode})
                      </Typography>
                    </div>
                  </div>
                </div>

                <Typography
                  fontSize={14}
                  color="#777"
                  textTransform={"capitalize"}
                  marginTop={2}
                >
                  {item.legs[0].carriers.marketing[0].name} •{" "}
                  {selectedOptions || "economy"}
                </Typography>
              </div>
              <div className="flight-right">
                <div className="flight-row">
                  <AirlineSeatLegroomExtraIcon sx={{ color: "#606469" }} />
                  <Typography color={"#777"} fontSize={14}>
                    Below average legroom (71 cm)
                  </Typography>
                </div>
                <div className="flight-row">
                  <TapAndPlayIcon sx={{ color: "#606469" }} />
                  <Typography color={"#777"} fontSize={14}>
                    Stream media content to your device
                  </Typography>
                </div>
                <div className="flight-row">
                  <PublicIcon sx={{ color: "#606469" }} />
                  <Typography color={"#777"} fontSize={14}>
                    Estimated Emission: 47 kg CO2e
                  </Typography>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Result;
