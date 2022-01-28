import React from "react";
import { Container } from "react-bootstrap";
import ItemCount from "./ItemCount";

//el export default tambien podemos ponerlo antes del FunctionalComponent
export default function ItemListContainer({ greeting }) {
  return (
    <div>
      <Container className="pt-4 text-secondary">
        <h2>{greeting}</h2>
        <ItemCount />
      </Container>
    </div>
  );
}
