import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Container } from "react-bootstrap";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Cart() {
  const { cart, sumCartPrice, sumCartQty } = useContext(CartContext);

  //Creamos los useState
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState(11342423);
  const [email, setEmail] = useState("johndoe@test.com");
  const [orderId, setOrderId] = useState("");

  const getOrder = () => {
    //creamos la order
    const newOrder = {
      date: new Date(),
      buyer: { name, phone, email },
      items: cart,
      total: sumCartPrice(),
    };

    console.log("esto se ejecuta al ejecutar la function getOrder");

    //creamos el ticket en firebase collection
    addDoc(collection(db, "ticket"), newOrder)
      .then((res) => {
        setOrderId(res.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (orderId !== "") {
    return (
      <h2 className="fs-1 text-center py-5 my-5">Orden de compra {orderId}</h2>
    );
  } else {
    return (
      <>
        <Container>
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
                <Button onClick={() => getOrder()}>Finalizar compra</Button>
              </div>
            </div>
          )}
        </Container>
      </>
    );
  }
}
