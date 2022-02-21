import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

/* export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, count) => {
    //setCart();
    console.log(item);
  };

  addToCart();

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
} */

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, count) => {
    //setCart();
    console.log("esto anda");
  };

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
