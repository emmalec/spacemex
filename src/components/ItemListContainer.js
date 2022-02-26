import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getItems } from "../api/api";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

//import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting }) {
  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);

  //aca se resuelve la promesa y se guarda el array de productos en products
  useEffect(() => {
    getItems().then(function (products) {
      // Seteo products con un filter que compara la categoria en products.category a exactamente igual que el nombre de la categoria que definimos en nuestra api y con el parametro que le pasamos en el componente padre
      // Uso un ternary operator if categoryName es null (cuando estamos en el home) nos setea en el state del hook todos los productos ELSE nos filtra por categoria
      !categoryName
        ? setProducts(products)
        : setProducts(
            products.filter((products) => {
              return products.category === categoryName;
            })
          );
    });
  }, [categoryName]); //con las dependencias vacias la funcion se ejecuta una vez cargado el componente y listo

  /* useEffect(() => {
    //funcion de firestore para obtener los documentos
    getDocs(collection(db, "items"))
      //snapshot es una copia de esa db para poder obtenerla completa
      .then((snapshot) => {
        //Estoy retornando un objeto cuando mapeo que tiene un id, el spread me permite tomar esos datos y hacer un clon de esas propiedades, es doc.data porque el objeto data de firestore es donde estan todos los datos de mi db
        
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  return (
    <div>
      <Container>
        <Row className="py-4 text-secondary">
          <h2>{(greeting, categoryName)}</h2>
        </Row>
        <Row>
          <ItemList products={products} />
        </Row>
      </Container>
    </div>
  );
}
