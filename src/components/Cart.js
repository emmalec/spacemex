import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import CartForm from "./CartForm";

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
  //useState de error de formulario, setea un objeto
  const [formErrors, setFormErrors] = useState({});

  //La funcion handleChange setea cada prop del {objeto} buyer
  const handleChange = (event) => {
    setBuyer((buyer) => ({
      ...buyer,
      [event.target.name]: event.target.value,
    }));
    //probar bien aca el validate
    validateForm(buyer);
  };

  //validate email function called on handleSubmitOrd
  const validateForm = () => {
    let errors = {};
    //name field empty
    if (!buyer.name) {
      errors.name = "Por favor ingrese su nombre";
    }
    //surname field empty
    if (!buyer.surname) {
      errors.surname = "Por favor ingrese su apellido";
    }
    //email field empty/ RegExp validation / mail match
    if (!buyer.email) {
      errors.email = "La direccion de e-mail es obligatoria";
    } else if (!/\S+@\S+\.\S+/.test(buyer.email)) {
      errors.email = "La direccion de e-mail es invalida";
    } else if (buyer.email !== buyer.emailValid) {
      errors.emailValid = "El e-mail no coincide";
    }
    setFormErrors(errors);
    //If object keys of error is 0 then true
    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmitOrd = (e) => {
    //prevent default para el refresh
    e.preventDefault();
    if (validateForm(buyer)) {
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
    } else {
      console.log("Error en el form");
    }
  };

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
                    <Button onClick={deleteCart} variant="warning">
                      Vaciar carrito
                    </Button>
                    <Button variant="primary">Seguir comprando</Button>
                  </div>
                </div>
              )}
            </Col>

            <Col md={4} className="py-4 mt-4 border rounded bg-light">
              <h2>Completa el formulario para finalizar la compra</h2>
              <CartForm
                formErrors={formErrors}
                buyer={buyer}
                handleChange={handleChange}
                handleSubmitOrd={handleSubmitOrd}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
