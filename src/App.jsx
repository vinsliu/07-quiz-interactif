import { Container } from "react-bootstrap";
import "./App.scss";
import QuizAccordion from "./components/QuizAccordion";
import FilterQuiz from "./components/FilterQuiz";

function App() {
  const data = [
    {
      id: 1,
      category: "Math",
      question: "Combien font 2+2 ?",
      answer: "4",
      validation: null,
    },
    {
      id: 2,
      category: "Science",
      question: "Quelle est la formule de l'eau ?",
      answer: "H2O",
      validation: null,
    },
    {
      id: 3,
      category: "Histoire",
      question: "Qui a découvert l'Amérique ?",
      answer: "Christophe Colomb",
      validation: null,
    },
  ];

  const filteredData = data.filter((item) => item.category);

  return (
    <>
      <Container>
        <h1>Quiz Intéractif</h1>
        <FilterQuiz />
        {filteredData.map((item) => (
          <QuizAccordion key={item.id} question={item.question} answer={item.answer} />
        ))}
      </Container>
    </>
  );
}

export default App;
