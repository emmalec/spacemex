import React, { useEffect, useState } from "react";

import { Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../firebase";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [productsDetail, setProductsDetail] = useState([]);
  // itemId lo defino en App.js - los nombres deben coincidir
  // El tipo de dato que nos devuelve el parametro es un string, hay que transformarlo en number de ser necesario

  // useParams es un custom hook que recibe un {objeto} que tiene una prop: que el nombre es el mismo que definimos en App.js (itemId)
  // Acá usamos destructuring props para sacar el itemId del objeto => parametro.itemId
  const { itemId } = useParams();

  //Aca buscamos el ID en firebase
  useEffect(() => {
    //Le paso la referencia a mi item
    //Necesita conocer la base de datos, el nombre de la collection y el item
    const itemRef = doc(db, "items", itemId);
    getDoc(itemRef)
      .then((snapshot) => {
        //funcion de objetos de firebase para ver si existe
        if (snapshot.exists()) {
          //doc.id es el id doc.data es el contenido de ese campo con la data , el id es la raiz el data el contenido
          setProductsDetail({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  {
    if (loading) {
      return <Loading message="Cargando detalle" />;
    }
    return (
      <>
        <Container>
          <Row>
            <ItemDetail key={productsDetail.id} item={productsDetail} />
          </Row>
        </Container>
      </>
    );
  }
}
