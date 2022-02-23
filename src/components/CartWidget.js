import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";

export default function CartWidget() {
  const { sumCartQty } = useContext(CartContext);

  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} />
      {sumCartQty() > 0 && <span>{sumCartQty()}</span>}
    </>
  );
}
