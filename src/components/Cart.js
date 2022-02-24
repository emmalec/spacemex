import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container } from "react-bootstrap";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";

export default function Cart() {
  const { cart, sumCartPrice, sumCartQty } = useContext(CartContext);

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
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
