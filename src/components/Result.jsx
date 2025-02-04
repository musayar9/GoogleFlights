import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useGlobalContext } from "../context/context";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { formatDuration, formatHour } from "../utils/functions";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
const Result = () => {
  const { flights, setFlights } = useGlobalContext();

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
                width: "80%",
                justifyContent: "space-between",
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

              <div className="flight-info__price">
                <p className="flight-info__priceText">{item.price.formatted}</p>
                <p className="flight-info__flightStatus">
                  {item.legs.length > 1 ? "gidiş-dönüş" : "tek yön"}
                </p>
              </div>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            Uçuş detayları burada görüntülenecek.
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Result;
