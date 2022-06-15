import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionItem(props) {
  return (
    <Accordion
      disableGutters="True"
      expanded={props.accordionExpanded === props.panel}
      onChange={props.accordionFunction(props.panel)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
        <Typography>{props.summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
