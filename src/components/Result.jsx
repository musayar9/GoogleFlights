import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";
import NotFlights from "./NotFlights";
import AccordionSummaryContent from "./AccordionSummaryContent";
import AccordionDetailContent from "./AccordionDetailContent";

const Result = () => {
  // Get global context values for flights, selected options, and loading state
  const { flights, loading } = useGlobalContext();
  // Show loading component if data is still being fetched
  if (loading) {
    return <Loading />;
  }

  // Show no flights available component if no itineraries are found
  if (flights?.data?.itineraries?.length === 0 || flights.status === "false") {
    return <NotFlights />;
  }

  return (
    <div className="accordion-container">
      {/* Map through the list of flight itineraries and render an accordion for each */}
      {flights?.data?.itineraries?.map((item) => (
        <Accordion key={item.id}>
          {/* Accordion summary containing flight overview */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <AccordionSummaryContent item={item} />
          </AccordionSummary>
          {/* Accordion details containing additional flight information */}
          <AccordionDetails>
            <AccordionDetailContent item={item} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Result;
