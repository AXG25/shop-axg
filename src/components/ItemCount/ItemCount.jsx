import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import { useState } from "react";

export const ItemCount= () => {
  const [counter, setCounter] = useState(1);
  const sumar = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <ButtonGroup>
      <Button variant="outline-dark" onClick={restar}>
        -
      </Button>
      <Button variant="dark">{counter}</Button>
      <Button variant="outline-dark" onClick={sumar}>
        +
      </Button>
    </ButtonGroup>
  );
}

