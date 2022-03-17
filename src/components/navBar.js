import React from "react";
//React-router import
import { Link } from "react-router-dom";
//React-bootstrap components import
import { Navbar, Nav, Container } from "react-bootstrap";
//font-awsome import
import CartWidget from "./CartWidget";
//logo import
import logo from "../../src/spacemexLogo.png";
//custom CSS import
import "../components/NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">
              <img src={logo} alt="Spacemex logo" className="logoImg"></img>
            </Navbar.Brand>
          </Link>
          <Nav className="me-5 d-flex justify-content-end">
            {/* Using Nav.Link as Link to bind react-bootstrap and react-dom */}
            <Nav.Link as={Link} to="/category/food">
              Food
            </Nav.Link>
            <Nav.Link as={Link} to="/category/merchandise">
              Merchandise
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" activeClassName="active">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
