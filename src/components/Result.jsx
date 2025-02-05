import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useGlobalContext } from "../context/context";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { formatDuration, formatHour, formatLongDate } from "../utils/functions";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import PublicIcon from "@mui/icons-material/Public";
const Result = () => {
  const { flights, setFlights, selectedOptions } = useGlobalContext();

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem("flights"));
    if (value) {
      setFlights(value);
    }
  }, []);

  console.log("fli", flights?.data);

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
                  <p className="flight-info__time">
                    {formatHour(item.legs?.[0].departure)}
                  </p>
                  <HorizontalRuleIcon />
                  <p className="flight-info__time">
                    {formatHour(item.legs?.[0].arrival)}
                  </p>
                </div>
                <p className="flight-info__carrier">
                  {item.legs[0].carriers.marketing[0].name}
                </p>
              </div>
              <div className="flight-duration">
                <p className="flight-info__time">
                  {formatDuration(item.legs?.[0].durationInMinutes)}
                </p>
                <div className="flight-duration__time">
                  <p className="flight-info__displayCode">
                    {item.legs?.[0]?.origin.displayCode}
                  </p>
                  <HorizontalRuleIcon sx={{ color: "#a1a3a4" }} />
                  <p className="flight-info__displayCode">
                    {item.legs?.[0]?.destination.displayCode}
                  </p>
                </div>
              </div>

              <div>
                <p className="flight-info__stopCount">
                  {item.legs?.[0].stopCount === 0 ? "Aktarmasız" : "Aktarmalı"}
                </p>
              </div>
              <div className="flight-emissions">
                <p className="flight-info__emissions">47 kg CO2e</p>
                <p className="flight-info__emission-amount">-30% emissions</p>
              </div>
              <div className="flight-info__price">
                <p className="flight-info__priceText">{item.price.formatted}</p>
                <p className="flight-info__flightStatus">
                  {item.legs.length > 1 ? "gidiş-dönüş" : "tek yön"}
                </p>
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
                    <p>{formatLongDate(item.legs?.[0].departure)}</p>
                    <div className="flight-row">
                      <span className="flight-time">
                        {formatHour(item.legs?.[0].departure)}
                      </span>
                      <span className="flight-location">
                        {item.legs?.[0].origin.name} (
                        {item.legs?.[0].origin.displayCode})
                      </span>
                    </div>
                  </div>
                </div>

                <p className="flight-duration">
                  Travel Time:
                  {formatDuration(item.legs?.[0].durationInMinutes)}
                </p>

                <div className="flight-left-content">
                  <FlightLandIcon sx={{ fontSize: "48px", color: "#1a73e8" }} />
                  <div>
                    <p>{formatLongDate(item.legs?.[0].arrival)}</p>
                    <div className="flight-row">
                      <span className="flight-time">
                        {formatHour(item.legs?.[0].arrival)}
                      </span>
                      <span className="flight-location">
                        {item.legs?.[0].destination.name} (
                        {item.legs?.[0].destination.displayCode})
                      </span>
                    </div>
                  </div>
                </div>

                <p className="flight-details">
                  {item.legs[0].carriers.marketing[0].name} •{" "}
                  {selectedOptions || "economy"}
                </p>
              </div>
              <div className="flight-right">
                <div className="flight-row">
                  <AirlineSeatLegroomExtraIcon sx={{ color: "#606469" }} />
                  <p className="flight-right-text">
                    Ortalama bacak mesafesinin altında (71 cm)
                  </p>
                </div>
                <div className="flight-row">
                  <TapAndPlayIcon sx={{ color: "#606469" }} />
                  <p className="flight-right-text">
                    Cihazınıza medya içeriği akışı gerçekleştirin
                  </p>
                </div>
                <div className="flight-row">
                  <PublicIcon sx={{ color: "#606469" }} />
                  <p className="flight-right-text">
                    Tahmini Emisyon: 47 kg CO2e
                  </p>
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
