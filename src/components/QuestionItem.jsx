import { Button } from "react-bootstrap";

function QuestionItem({ answer }) {
  return (
    <>
      <h2>Réponse :</h2>
      <p>{answer}</p>
      <div>
        <Button variant="success" className="me-2">
          Juste
        </Button>
        <Button variant="danger">Faux</Button>
      </div>
    </>
  );
}
export default QuestionItem;
