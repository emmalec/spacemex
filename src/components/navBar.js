import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap"; //import de los componentes necesarios de bootstrap
import logo from "../../src/spacemexLogo.png"; //import de el logo para usarlo en img
import "../components/NavBar.css"; // import de mi css
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">
              <img src={logo} alt="Spacemex logo" className="logoImg"></img>
            </Navbar.Brand>
          </Link>
          <Nav className="me-5 d-flex justify-content-end">
            {/* Acá uso el as={Link} para referenciar al Link de react-router y poder usar el NavLink de Bootstrap */}
            <Nav.Link as={Link} to="/category/comida">
              Comida
            </Nav.Link>
            <Nav.Link as={Link} to="/category/merchandise">
              Merchandise
            </Nav.Link>
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
