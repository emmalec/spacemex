import React from "react";
import { Container } from "react-bootstrap";
import ItemCount from "./ItemCount";

function addItems() {}

//el export default tambien podemos ponerlo antes del FunctionalComponent
export default function ItemListContainer({ greeting }) {
  return (
    <div>
      <Container className="pt-4 text-secondary">
        <h2>{greeting}</h2>
        <ItemCount stock={5} initial={1} onaAdd={addItems} />
      </Container>
    </div>
  );
}
