import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

//el export default tambien podemos ponerlo antes del FunctionalComponent
export default function ItemListContainer({ greeting }) {
  function cartItems(count) {
    console.log("Se agregaron " + count + " productos al carrito!");
  }

  return (
    <div>
      <Container>
        <Row className="py-4 text-secondary">
          <h2>{greeting}</h2>
        </Row>
        {/* <Row>
          <ItemCount stock={5} initial={1} onAdd={cartItems} />
        </Row> */}
      </Container>
    </div>
  );
}
