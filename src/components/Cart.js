import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card, Col, Button } from "react-bootstrap";

export default function Cart() {
  const { cart, deleteCart, removeItem, sumCartPrice } =
    useContext(CartContext);

  return (
    <>
      {cart.map((item) => (
        <Card
          bg="light"
          className="d-flex flex-row justify-content-between py-4 px-4 mt-4"
        >
          <Col md={4} className="d-flex flex-column">
            <Card.Body>
              <Card.Title className="fs-1">{item.title}</Card.Title>
              <Card.Text className="fs-5 text-wrap text-secondary">
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: {item.price}</p>
              </Card.Text>
              <Button onClick={deleteCart}>Vaciar carrito</Button>
              <Button onClick={() => removeItem(item.id)} variant="danger">
                Borrar producto
              </Button>
            </Card.Body>
            <Card.Body></Card.Body>
          </Col>
          <Col md={3}>
            <Card.Img src={item.pictureUrl} />
          </Col>
        </Card>
      ))}
      {/* La function sumCart() returns sumCart = 0 
      estando vacio el cart, if sumCart > 0 then renderiza el h2 */}
      {sumCartPrice() > 0 && <h2>Total: {sumCartPrice()}</h2>}
    </>
  );
}
