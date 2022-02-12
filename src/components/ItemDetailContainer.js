import React, { useEffect, useState } from "react";
import { getItems } from "../api/api";
import ItemDetail from "./ItemDetail";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [productsDetail, setProductsDetail] = useState([]);
  // itemId lo defino en App.js - los nombres deben coincidir
  // El tipo de dato que nos devuelve el parametro es un string, hay que transformarlo
  const { itemId } = useParams();
  // Acá usamos destructuring props para sacar el itemId del objeto => parametro.itemId

  useEffect(() => {
    getItems()
      .then(function (productsDetail) {
        setProductsDetail(
          productsDetail.find((i) => i.id === parseInt(itemId)) //aca lo parseamos a int
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]); //le pasamos en la dependencia el parametro, para cuando cambie se ejecute nuevamente la funcion

  return (
    <Container>
      <Row>
        <ItemDetail key={productsDetail.id} item={productsDetail} />
      </Row>
    </Container>
  );
}
