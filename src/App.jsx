import { Container } from "react-bootstrap";
import "./App.scss";
import QuizAccordion from "./components/QuizAccordion";
import FilterQuiz from "./components/FilterQuiz";

function App() {
  return (
    <>
      <Container>
        <h1>Quiz Intéractif</h1>
        <FilterQuiz />
        <QuizAccordion />
      </Container>
    </>
  );
}

export default App;
