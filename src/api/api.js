import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

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

function getItemById() {}

export { getItems };
