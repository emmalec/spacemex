import React from "react";
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap";
import itemImg from "../img/nachos_guacamole.png";

export default function ItemCount() {
  return (
    <div>
      <Row xs={2} md={4} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={itemImg} />
              <Card.Body>
                <Card.Title>Nachos and guacamole</Card.Title>
                <Card.Text>
                  Los mejores nachos mexicanos, con el guacamole mas fresco, en
                  un packaging irresistible.
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <Button>-</Button>
                  <p>69</p>
                  <Button>+</Button>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <Button variant="outline-primary">Agregar al carrito</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
