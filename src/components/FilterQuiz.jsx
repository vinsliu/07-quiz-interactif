import { Dropdown } from "react-bootstrap";

function FilterQuiz({ setSelectedCategory, categories }) {
  const handleSelected = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Dropdown onSelect={handleSelected}>
      <Dropdown.Toggle variant="primary">Filtre</Dropdown.Toggle>

      <Dropdown.Menu>
        {categories.map((category) => (
          <Dropdown.Item key={category} eventKey={category}>
            {category}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default FilterQuiz;
