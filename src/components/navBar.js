import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../img/spacemexLogo.png";
import "../components/NavBar.css";

export default class NavBar extends Component {
  render() {
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
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
