import React, { useContext, useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ItemDetail({ item }) {
  const [showButton, setShowButton] = useState(false);
  const { addToCart } = useContext(CartContext);

  function cartItems(quantity) {
    setShowButton(true);
    addToCart(item, quantity);
  }

  return (
    <Card
      bg="light"
      className="d-flex flex-row justify-content-between py-4 px-4 mt-4"
    >
      <Col md={4} className="d-flex flex-column">
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
          {showButton ? (
            <>
              <Link to="/cart">
                <Button variant="success" size="lg">
                  Ir al carrito
                </Button>
              </Link>
              <Link to="/">
                <Button variant="primary" size="lg" className="ms-2">
                  Seguir comprando
                </Button>
              </Link>
            </>
          ) : (
            <ItemCount stock={5} initial={1} onAdd={cartItems} />
          )}
        </Card.Body>
      </Col>
      <Col md={6}>
        <Card.Img src={item.pictureUrl} />
      </Col>
    </Card>
  );
}
