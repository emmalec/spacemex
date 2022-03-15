import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, quantity) {
    //Si esta en el carrito entonces else setCart()
    isOnCart(item.id)
      ? sumItems(item, quantity)
      : setCart([...cart, { ...item, quantity }]);
  }

  function isOnCart(id) {
    const response = cart.some((x) => x.id === id);
    return response;
  }

  function removeItem(id) {
    const index = cart.findIndex((x) => x.id === id);
    cart.splice(index, 1);
    setCart([...cart]);
  }

  function sumItems(item, quantity) {
    const copia = [...cart];
    copia.forEach((prod) => {
      if (prod.id === item.id) {
        prod.quantity += quantity;
      }
    });
  }

  function deleteCart() {
    setCart([]);
  }

  //Function con el array method .forEach
  //Esto se lo pasamos a un wrapper en el Cart.js para sumar el precio
  function sumCartPrice() {
    let cartTotal = 0;
    cart.forEach((item) => {
      cartTotal = cartTotal + item.price * item.quantity;
    });
    return cartTotal;
  }

  function sumCartQty() {
    return cart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      0
    );
  }

  return (
    //Armamos un wrapper component del provider para usarlo en App
    //Pasamos tanto el state cart, como la funcion addToCart a todos los childrens del wrapper Provider
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteCart,
        removeItem,
        sumCartPrice,
        sumCartQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
