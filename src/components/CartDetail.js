import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card, Col, Button } from "react-bootstrap";

export default function CartDetail({ item }) {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <Card bg="light" className="d-flex flex-row py-4 ps-4 pe-3 mt-4">
        <Col md={3}>
          <Card.Img src={item.pictureUrl} />
        </Col>
        <Col md={4} className="ms-4">
          <Card.Body className="pt-0">
            <Card.Title className="fs-2">{item.title}</Card.Title>
            <Card.Text className="fs-6 text-wrap text-secondary">
              <p className="my-0">Cantidad: {item.quantity}</p>
              <p className="my-0">Precio: {item.price}</p>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col md={1} className="ms-auto ps-2">
          <Button onClick={() => removeItem(item.id)} variant="danger">
            X
          </Button>
        </Col>
      </Card>
    </>
  );
}
