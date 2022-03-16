import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import { CartContext } from "../context/CartContext";

export default function CartTotal() {
  const { sumCartPrice, sumCartQty, deleteCart } = useContext(CartContext);

  return (
    <>
      <div className="border rounded d-flex justify-content-end py-4 mt-4 bg-light">
        <div className="pe-5">
          <p className="text-muted my-0">
            Hay {sumCartQty()} producto/s en tu carrito.
          </p>
          <h2>
            <span className="text-muted">Total: </span>
            {sumCartPrice()} ARS
          </h2>
          <Button onClick={deleteCart} variant="danger">
            Vaciar carrito
          </Button>
          <Link to="/">
            <Button variant="primary" className="ms-2">
              Seguir comprando
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
