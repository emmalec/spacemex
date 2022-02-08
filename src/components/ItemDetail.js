import React from "react";
import { Card, Col, Button } from "react-bootstrap";

export default function ItemDetail({ item }) {
  return (
    <Card bg="light" className="d-flex flex-row py-4 px-4">
      <Col>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            ARS {item.price}
          </Card.Subtitle>
          <Card.Text className="text-secondary">{item.description}</Card.Text>
          <Button>Agregar al carrito</Button>
        </Card.Body>
      </Col>
      <Col md={5}>
        <Card.Img variant="top" src={item.pictureUrl} />
      </Col>
    </Card>
  );
}
