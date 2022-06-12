import { Container } from "@mui/system";
import * as React from "react";
import AccordionItem from "../components/content/AccordionItem";

const questions = [
  "question1",
  "question2",
  "question3",
  "question4",
  "question5",
];
const answers = ["answer1", "answer2", "answer3", "answer4", "answer5"];

export default function FAQ() {
  return (
    <div>
      <Container>
        {questions.map((question, index) => (
          <AccordionItem question={question} answer={answers[index]} />
        ))}
      </Container>
    </div>
  );
}
