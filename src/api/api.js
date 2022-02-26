import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
/* 
const products = [
  {
    id: 1,
    title: "Nachos & Guacamole",
    description:
      "Los mejores nachos mexicanos, con el guacamole mas fresco, en un packaging irresistible.",
    price: 800,
    pictureUrl: "../img/nachos_guacamole.jpg",
    category: "comida",
  },
  {
    id: 2,
    title: "Tacos",
    description:
      "Los mejores tacos, con el mejor sabor mexicano, en un packaging super comodo.",
    price: 1000,
    pictureUrl: "../img/tacos.jpg",
    category: "comida",
  },
  {
    id: 3,
    title: "Spacemex T-shirt",
    description:
      "Hacete de esta remera con la mejor comodidad y calidad de SpaceMex.",
    price: 2000,
    pictureUrl: "../img/t-shirt.jpg",
    category: "merchandise",
  },
  {
    id: 4,
    title: "Space-Mugs",
    description:
      "Te presentamos las tazas de SpaceMex, termicas, irrompibles, de un material que nunca antes viste.",
    price: 3000,
    pictureUrl: "../img/mugs.jpg",
    category: "merchandise",
  },
]; */

//Esta es la function wrapper para que el codigo nos siga funcionando cuando llamamos a getItems()
function getItems() {
  return new Promise(function (resolve, reject) {
    //funcion de firestore para obtener los documentos
    getDocs(collection(db, "items"))
      //snapshot es una copia de esa db para poder obtenerla completa
      .then((snapshot) => {
        //Estoy retornando un objeto cuando mapeo que tiene un id, el spread me permite tomar esos datos y hacer un clon de esas propiedades, es doc.data porque el objeto data de firestore es donde estan todos los datos de mi db

        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(products);
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export { getItems };
