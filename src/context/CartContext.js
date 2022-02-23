import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, quantity) {
    //Si esta en el carrito entonces else setCart()
    isOnCart(item.id)
      ? //sumar cantidad aca
        sumItems(item, quantity) //console.log("Esta en el carrito!")
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
    //console.log({ quantity });
  }

  function deleteCart() {
    setCart([]);
  }

  //Function con el array method .forEach
  //Esto se lo pasamos a un wrapper en el Cart.js para sumar el precio
  function sumCart() {
    let cartTotal = 0;
    cart.forEach((item) => {
      cartTotal = cartTotal + item.price * item.quantity;
    });
    //console.log(cartTotal);
    return cartTotal;
  }

  //Function con el array method .reduce
  /* function sumCart() {
    //0 es el init value, el reduce recorre el array agregando el currentValue del step anterior
    return cart.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.quantity,
      0
    );
  }
 */

  function sumQty() {}

  return (
    //Armamos un wrapper component del provider para usarlo en App
    //Pasamos tanto el state cart, como la funcion addToCart a todos los childrens del wrapper Provider
    <CartContext.Provider
      value={{ cart, addToCart, deleteCart, removeItem, sumCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
