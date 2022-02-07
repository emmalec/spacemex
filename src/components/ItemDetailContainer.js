import React, { useEffect, useState } from "react";
import { getItems } from "../api/api";
import ItemDetail from "./ItemDetail";
import { Container, Row } from "react-bootstrap";

export default function ItemDetailContainer() {
  const [productsDetail, setProductsDetail] = useState([]);

  useEffect(() => {
    getItems().then(function (productsDetail) {
      setProductsDetail(productsDetail.find((i) => i.id === 2));
    });
  }, []);

  return (
    <Container>
      <Row>
        <ItemDetail key={productsDetail.id} item={productsDetail} />
      </Row>
    </Container>
  );
}
