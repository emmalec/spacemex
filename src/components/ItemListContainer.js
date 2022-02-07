import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getItems } from "../api/api";
import ItemList from "./ItemList";

//import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting }) {
  /* function cartItems(count) {
    console.log("Se agregaron " + count + " productos al carrito!");
  } */

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItems().then(function (products) {
      console.log(products);
      setProducts(products);
    });
  }, []); //con las dependencias vacias la funcion se ejecuta una vez cargado el componente y listo

  return (
    <div>
      <Container>
        <Row className="py-4 text-secondary">
          <h2>{greeting}</h2>
        </Row>
        {/* <Row>
          <ItemCount stock={5} initial={1} onAdd={cartItems} />
        </Row> */}
        <Row>
          <ItemList products={products} />
        </Row>
      </Container>
    </div>
  );
}
