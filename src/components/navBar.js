import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap"; //import de los componentes necesarios de bootstrap
import logo from "../img/spacemexLogo.png"; //import de el logo para usarlo en img
import "../components/NavBar.css"; // import de mi css
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Spacemex logo" className="img-fluid"></img>
          </Navbar.Brand>
          <Nav className="me-5 d-flex justify-content-end">
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#cart">
              <CartWidget></CartWidget>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
