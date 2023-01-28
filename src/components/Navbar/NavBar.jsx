import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Link to="/">
          <img
            className="logo"
            src="https://res.cloudinary.com/axiever/image/upload/v1671211514/tienda-axg/logo_tienda-removebg-preview_ayn5jd.png"
            alt="logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
            <Link className="text-light" to="/productos/Hombres">
              Hombres
            </Link>
            </Nav.Link>
            <Nav.Link>
            <Link className="text-light" to="/productos/Mujeres">
              Mujeres
            </Link>
            </Nav.Link>
            <Nav.Link>
            <Link className="text-light" to="/productos/Niños">
              Niños
            </Link>
            </Nav.Link>
            <Nav.Link>
            <Link className="text-light" to="/contacto">
              Contacto
            </Link>
            </Nav.Link>
            
                      
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-light" type="light">
                Buscar
              </button>
            </form>
          </Nav>
        </Navbar.Collapse>
      <CartWidget /> 
    </Container>
    </Navbar>
  );
}

export default Navbarr;
