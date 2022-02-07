import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function Item({ item }) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>$ {item.price}</Card.Text>
          <Card.Text className="text-secondary">{item.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
