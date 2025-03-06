import { Container } from "react-bootstrap";
import "./App.scss";
import QuizAccordion from "./components/QuizAccordion";
import FilterQuiz from "./components/FilterQuiz";
import { useState } from "react";

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

  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const categories = ["Toutes", ...new Set(data.map((item) => item.category))];

  const filteredData =
    selectedCategory === "Toutes"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Container>
        <h1>Quiz Intéractif</h1>
        <FilterQuiz
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
        <QuizAccordion data={filteredData} />
      </Container>
    </>
  );
}

export default App;
