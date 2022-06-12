import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionItem(props) {
  return (
    <Accordion disableGutters="True">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
