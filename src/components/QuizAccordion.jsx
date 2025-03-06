import { Accordion } from "react-bootstrap";
import QuestionItem from "./QuestionItem";

function QuizAccordion({ data }) {
  return (
    <Accordion defaultActiveKey="0">
      {data.map((item, index) => (
        <Accordion.Item eventKey={index.toString()} key={item.id}>
          <Accordion.Header> {item.question} </Accordion.Header>
          <Accordion.Body>
            <QuestionItem answer={item.answer} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default QuizAccordion;
