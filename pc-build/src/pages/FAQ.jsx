import { Container } from "@mui/system";
import * as React from "react";
import AccordionItem from "../components/content/AccordionItem";
import { Typography } from "@mui/material";

export default function FAQ() {
  const accordionlist = [
    {
      summary: "question1",
      detail: "answer1",
      panel: "panel1",
    },
    {
      summary: "question2",
      detail: "answer2",
      panel: "panel2",
    },
    {
      summary: "question3",
      detail: "answer3",
      panel: "panel3",
    },
  ];
  const [accordionIsExpanded, setAccordionIsExpanded] = React.useState(false);

  const accordionExpansionHandler = (panel) => (event, isExpanded) => {
    setAccordionIsExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Typography variant="h1" textAlign="center" mt={3}>
        Frequently Asked Questions
      </Typography>
      <Container sx={{ marginTop: 3 }}>
        {accordionlist.map((item) => (
          <AccordionItem
            summary={item.summary}
            details={item.detail}
            accordionExpanded={accordionIsExpanded}
            accordionFunction={accordionExpansionHandler}
            panel={item.panel}
          />
        ))}
      </Container>
    </div>
  );
}
