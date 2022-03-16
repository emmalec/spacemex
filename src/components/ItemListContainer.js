import React, { useEffect, useState } from "react";

import { Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { getItems } from "../api/api";
import ItemList from "./ItemList";
import Loading from "./Loading";

export default function ItemListContainer({ greeting }) {
  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //promise resolve storing product array in products
  useEffect(() => {
    getItems()
      .then(function (products) {
        //if there's no categoryName then setProducts array, else filter products by category and setProducts filtered
        !categoryName
          ? setProducts(products)
          : setProducts(
              products.filter((products) => {
                return products.category === categoryName;
              })
            );
      })
      .finally(() => setLoading(false));
  }, [categoryName]);

  if (!loading) {
    return (
      <>
        <Container>
          <Row className="py-4 text-secondary">
            {!categoryName ? (
              <h2>{greeting}</h2>
            ) : (
              <h2 className="text-capitalize">Categoria: {categoryName}</h2>
            )}
          </Row>
          <Row>
            <ItemList products={products} />
          </Row>
        </Container>
      </>
    );
  } else {
    return <Loading message="Cargando productos" />;
  }
}
