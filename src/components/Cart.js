import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Cart() {
  const { cart, sumCartPrice, sumCartQty, deleteCart } =
    useContext(CartContext);

  //Creamos los useState
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState(11342423);
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleSubmitOrd = (e) => {
    //prevent default para el refresh
    e.preventDefault();
    //creamos la order
    const newOrder = {
      date: new Date(),
      buyer: { name, surname, phone, email },
      items: cart,
      total: sumCartPrice(),
    };

    //creamos el ticket en firebase collection
    addDoc(collection(db, "ticket"), newOrder)
      .then((res) => {
        //aca saco el id del response de firebase
        setOrderId(res.id);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(deleteCart());
  };

  /* const getOrder = () => {
    //creamos la order
    const newOrder = {
      date: new Date(),
      buyer: { name, surname, phone, email },
      items: cart,
      total: sumCartPrice(),
    };

    //creamos el ticket en firebase collection
    addDoc(collection(db, "ticket"), newOrder)
      .then((res) => {
        setOrderId(res.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }; */

  if (orderId !== "") {
    return (
      <h2 className="fs-1 text-center py-5 my-5">Orden de compra: {orderId}</h2>
    );
  } else {
    return (
      <>
        <Container>
          <Row>
            <Col md={8}>
              {cart.length > 0 ? (
                cart.map((item) => <CartDetail key={item.id} item={item} />)
              ) : (
                <h2 className="fs-1 text-center py-5 my-5">
                  El carrito está vacio! Ir a <Link to="/">Home</Link>
                </h2>
              )}
              {/* La function sumCart() returns sumCart = 0 
          estando vacio el cart, if sumCart > 0 then renderiza el h2 */}
              {sumCartPrice() > 0 && (
                <div className="border rounded d-flex justify-content-end py-4 mt-4">
                  <div className="pe-5">
                    <p className="text-muted my-0">
                      Hay {sumCartQty()} productos en tu carrito.
                    </p>
                    <h2>Total: ARS {sumCartPrice()}</h2>
                    {/* <Button onClick={() => getOrder()}>Finalizar compra</Button> */}
                    <Button onClick={deleteCart}>Vaciar carrito</Button>
                  </div>
                </div>
              )}
            </Col>
            <Col md={4} className="mt-4">
              <h2>Completa el formulario para finalizar la compra</h2>
              <Form onSubmit={handleSubmitOrd}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Ingrese su nombre"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSurname">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    onChange={(e) => setSurname(e.target.value)}
                    value={surname}
                    type="text"
                    placeholder="Ingrese su nombre"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Button variant="success" type="submit" className="btn-lg">
                  Finalizar compra
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
