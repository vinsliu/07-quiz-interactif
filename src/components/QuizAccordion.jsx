import { Accordion } from "react-bootstrap";
import QuestionItem from "./QuestionItem";

function QuizAccordion({ question }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> {question} </Accordion.Header>
        <Accordion.Body>
          <QuestionItem />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default QuizAccordion;
