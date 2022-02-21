import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, quantity) {
    //Si esta en el carrito entonces else setCart()
    isOnCart(item.id)
      ? console.log("Esta en el carrito!")
      : setCart([...cart, { ...item, quantity }]);
  }

  function isOnCart(id) {
    const response = cart.some((prod) => prod.id === id);
    return response;
  }

  function deleteCart() {
    setCart([]);
  }

  console.log(cart);

  return (
    //Armamos un wrapper component del provider para usarlo en App
    //Pasamos tanto el state cart, como la funcion addToCart a todos los childrens del wrapper Provider
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
