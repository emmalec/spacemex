import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card, Col, Button } from "react-bootstrap";

export default function CartDetail({ item }) {
  const { deleteCart, removeItem } = useContext(CartContext);

  return (
    <>
      <Card bg="light" className="d-flex flex-row  py-4 px-4 mt-4">
        <Col md={2}>
          <Card.Img src={item.pictureUrl} />
        </Col>
        <Col md={4} className="ms-4">
          <Card.Body className="pt-0">
            <Card.Title className="fs-2">{item.title}</Card.Title>
            <Card.Text className="fs-6 text-wrap text-secondary">
              <p className="my-0">Cantidad: {item.quantity}</p>
              <p className="my-0">Precio: {item.price}</p>
            </Card.Text>
            <Button onClick={deleteCart}>Vaciar carrito</Button>
            <Button onClick={() => removeItem(item.id)} variant="danger">
              Borrar producto
            </Button>
          </Card.Body>
          <Card.Body></Card.Body>
        </Col>
      </Card>
    </>
  );
}
