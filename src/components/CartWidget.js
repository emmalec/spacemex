import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
import "../components/CartWidget.css";

export default function CartWidget() {
  const { sumCartQty } = useContext(CartContext);

  return (
    <>
      <div className="cartContainer">
        <span className="cartWidget">
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
        {sumCartQty() > 0 && <span className="cartQty">{sumCartQty()}</span>}
      </div>
    </>
  );
}
