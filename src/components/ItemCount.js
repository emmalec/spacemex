import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ItemCount() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Product title</Card.Title>
          <Card.Text>La descripcion del producto va acá.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
