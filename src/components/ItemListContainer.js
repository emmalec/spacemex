import React from "react";
import { Container, Row } from "react-bootstrap";
import ItemCount from "./ItemCount";

function addItems() {
  console.log("esto anda");
}

//el export default tambien podemos ponerlo antes del FunctionalComponent
export default function ItemListContainer({ greeting }) {
  return (
    <div>
      <Container>
        <Row className="py-4 text-secondary">
          <h2>{greeting}</h2>
        </Row>
        <Row>
          <ItemCount stock={5} initial={1} onAdd={addItems} />
        </Row>
      </Container>
    </div>
  );
}
