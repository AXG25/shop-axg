import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

export const ItemCount= ({cantidad, setCantidad, max, onAdd}) => {
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
    };
    
  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1)
  };
  return (
    <>
    <ButtonGroup>
      <Button variant="outline-dark" onClick={handleRestar}>
        -
      </Button>
      <Button variant="dark">{cantidad}</Button>
      <Button variant="outline-dark" onClick={handleSumar}>
        +
      </Button>
    </ButtonGroup>
    <br/>
    <Button variant='dark' onClick={onAdd}>Agregar al carrito</Button>

    </>
    
    
  );
}

