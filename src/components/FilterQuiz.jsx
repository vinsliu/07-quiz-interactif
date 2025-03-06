import { Dropdown } from "react-bootstrap";

function FilterQuiz() {
  return (
    <Dropdown>
      <Dropdown.Toggle>Filtre</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>One</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default FilterQuiz;
