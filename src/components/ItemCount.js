import React, { useState } from "react";
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap";
import itemImg from "../img/nachos_guacamole.png";

export default function ItemCount({ stock, initial, onAdd }) {
  //ternario para desactivar button bootstrap clase

  const [count, setCount] = useState(0);

  return (
    <div>
      <Row xs={2} md={4} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={itemImg} />
              <Card.Body>
                <Card.Title>Nachos & guacamole</Card.Title>
                <Card.Text className="text-secondary">
                  Los mejores nachos mexicanos, con el guacamole mas fresco, en
                  un packaging irresistible.
                </Card.Text>
                <div className="d-flex justify-content-between mx-4 my-4 bg-light border">
                  <Button
                    onClick={function () {
                      setCount(count - 1);
                    }}
                  >
                    -
                  </Button>
                  <span className="m-0 fs-5 fw-normal align-baseline">
                    {count}
                  </span>
                  <Button
                    onClick={function () {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </Button>
                </div>
                <div className="d-flex justify-content-center py-2">
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
