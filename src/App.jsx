import { Container } from "react-bootstrap";
import "./App.scss";
import QuizAccordion from "./components/QuizAccordion";

function App() {
  return (
    <>
      <Container>
        <h1>Quiz Intéractif</h1>
        <QuizAccordion />
      </Container>
    </>
  );
}

export default App;
