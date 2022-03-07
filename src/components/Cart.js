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

  //Creamos el useState con el objeto buyer para setearlo mas adelante en el handleChange
  const [buyer, setBuyer] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    emailValid: "",
  });

  //useState de la order
  const [orderId, setOrderId] = useState("");
  const [formError, setFormError] = useState(false);

  //La funcion handleChange setea cada prop del {objeto} buyer
  const handleChange = (event) => {
    console.log(
      "handleChange -> " + event.target.name + " : " + event.target.value
    );

    setBuyer((buyer) => ({
      ...buyer,
      [event.target.name]: event.target.value,
    }));
  };

  //En esta funcion validamos el formulario
  const validateForm = () => {
    let errors = {};
    //name field
    if (!buyer.name) {
      errors.name = "Por favor ingrese su nombre";
      console.log("error");
    }
    /* //email field
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    } */
  };

  const handleSubmitOrd = (e) => {
    //prevent default para el refresh
    e.preventDefault();
    validateForm();
    //creamos la order
    const newOrder = {
      date: new Date(),
      buyer: buyer,
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
                    placeholder="Ingrese su nombre"
                    type="text"
                    name="name"
                    value={buyer.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSurname">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    placeholder="Ingrese su apellido"
                    type="text"
                    name="surname"
                    value={buyer.surname}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    placeholder="Ingrese su e-mail"
                    type="email"
                    name="email"
                    value={buyer.email}
                    onChange={handleChange}
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
