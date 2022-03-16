import React from "react";

export default function CartOrder({ orderId }) {
  return (
    <>
      <h2 className="fs-1 text-center py-5 my-5">Orden de compra: {orderId}</h2>
    </>
  );
}
