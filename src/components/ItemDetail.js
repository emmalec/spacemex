import React from "react";
import { Card, Col, Button } from "react-bootstrap";

export default function ItemDetail({ item }) {
  return (
    <Card
      bg="light"
      className="d-flex flex-row justify-content-between py-4 px-4 mt-4"
    >
      <Col md={5} className="d-flex flex-column">
        <Card.Body>
          <Card.Title className="fs-1">{item.title}</Card.Title>
          <Card.Subtitle className="fs-2 mb-2 text-muted">
            ARS {item.price}
          </Card.Subtitle>
          <Card.Text className="fs-5 text-wrap text-secondary">
            {item.description}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Button className="btn-lg">Agregar al carrito</Button>
        </Card.Body>
      </Col>
      <Col md={6}>
        <Card.Img src={item.pictureUrl} />
      </Col>
    </Card>
  );
}
