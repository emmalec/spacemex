import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container } from "react-bootstrap";
import CartDetail from "./CartDetail";

export default function Cart() {
  const { cart, sumCartPrice } = useContext(CartContext);

  return (
    <>
      <Container>
        {cart.map((item) => (
          <CartDetail key={item.id} item={item} />
        ))}
        {/* <Card bg="light" className="d-flex flex-row  py-4 px-4 mt-4">
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
          </Card> */}

        {/* La function sumCart() returns sumCart = 0 
      estando vacio el cart, if sumCart > 0 then renderiza el h2 */}
        {sumCartPrice() > 0 && (
          <div className="border rounded d-flex justify-content-end py-4 mt-4">
            <h2 className="pe-2">Total: ARS {sumCartPrice()}</h2>
          </div>
        )}
      </Container>
    </>
  );
}
