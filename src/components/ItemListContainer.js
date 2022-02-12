import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getItems } from "../api/api";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

//import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting }) {
  /* function cartItems(count) {
    console.log("Se agregaron " + count + " productos al carrito!");
  } */

  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);

  //aca se resuelve la promesa y se guarda el array de productos en products
  useEffect(() => {
    getItems().then(function (products) {
      //console.log(products);
      // setProducts(products);
      //aca seteo products con un filter que compara la categoria en products.category a exactamente igual que el nombre de la categoria que definimos en nuestra api y con el parametro que le pasamos en el componente padre
      // uso un ternary operator if categoryName es null (cuando estamos en el home) nos setea en el state del hook todos los productos ELSE nos filtra por categoria
      !categoryName
        ? setProducts(products)
        : setProducts(
            products.filter((products) => {
              return products.category === categoryName;
            })
          );
    });
  }, [categoryName]); //con las dependencias vacias la funcion se ejecuta una vez cargado el componente y listo

  return (
    <div>
      <Container>
        <Row className="py-4 text-secondary">
          <h2>{(greeting, categoryName)}</h2>
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
