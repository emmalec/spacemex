import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Col, Container, Row } from "react-bootstrap";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import CartForm from "./CartForm";
import Loading from "./Loading";
import CartOrder from "./CartOrder";
import CartTotal from "./CartTotal";

export default function Cart() {
  //Traemos el cart y las functions del context
  const { cart, sumCartPrice, deleteCart } = useContext(CartContext);

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
  //button disabled CartForm
  const [buttonDisabled, setButtonDisabled] = useState(true);
  //loading
  const [loading, setLoading] = useState(undefined);

  //La funcion handleChange setea cada prop del {objeto} buyer
  const handleChange = (event) => {
    setBuyer((buyer) => ({
      ...buyer,
      [event.target.name]: event.target.value,
    }));
    //probar bien aca el validate
    //validateForm(buyer);
  };

  //validate email function called on handleSubmitOrd/handleChange
  const validateForm = () => {
    let errors = {};
    //name field empty / text RegEx
    if (!buyer.name) {
      errors.name = "Por favor ingrese su nombre";
    } else if (!/^[a-z ,.'-]+$/i.test(buyer.name)) {
      errors.name = "Ingrese un nombre valido";
    }
    //surname field empty / text RegEx
    if (!buyer.surname) {
      errors.surname = "Por favor ingrese su apellido";
    } else if (!/^[a-z ,.'-]+$/i.test(buyer.surname)) {
      errors.surname = "Ingrese un apellido valido";
    }
    //phonefield empty
    if (!buyer.phone) {
      errors.phone = "Por favor ingrese su telefono";
    } else if (
      !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(buyer.phone)
    ) {
      errors.phone = "Ingrese un telefono valido";
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
      setButtonDisabled(false);
      return true;
    } else {
      setButtonDisabled(true);
      return false;
    }
  };

  const handleSubmitOrd = (e) => {
    //prevent default para el refresh
    e.preventDefault();
    if (validateForm(buyer)) {
      setLoading(true);
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
        .finally(() => setLoading(false), deleteCart());
    } else {
      console.log("Error en el form");
    }
  };

  //if orderId is not empty ther render Orden de compra
  if (orderId !== "") {
    return <CartOrder orderId={orderId} />;
  } else if (loading === true) {
    return <Loading message="Estamos preparando tu orden" />;
  }
  //if cart lenght is equal to 0 then render Carrito vacio
  else if (cart.length === 0) {
    return (
      <>
        <h2 className="fs-1 text-center py-5 my-5">
          El carrito está vacio! Ir a <Link to="/">Home</Link>
        </h2>
      </>
    );
  }
  // else render the cart
  else {
    return (
      <>
        <Container fluid>
          <Row>
            <Col md={8} className="mb-5">
              {
                //Cart items
                cart.length > 0 ? (
                  cart.map((item) => <CartDetail key={item.id} item={item} />)
                ) : (
                  <h2 className="fs-1 text-center py-5 my-5">
                    El carrito está vacio! Ir a <Link to="/">Home</Link>
                  </h2>
                )
              }
              {
                //Cart total
                cart.length > 0 && <CartTotal />
              }
            </Col>

            <Col md={4}>
              <Container className="py-4 mt-4 border rounded bg-light">
                <h2 className="mb-4">
                  Completa el formulario para finalizar la compra
                </h2>
                <CartForm
                  formErrors={formErrors}
                  buyer={buyer}
                  buttonDisabled={buttonDisabled}
                  handleChange={handleChange}
                  handleSubmitOrd={handleSubmitOrd}
                  validateForm={validateForm}
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
