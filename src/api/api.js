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
      "Te presentamos las tazas de SpaceMex, termicas, irrompibles, de un material que nunca antes viste",
    price: 3000,
    pictureUrl: "../img/mugs.jpg",
    category: "merchandise",
  },
];

const promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(products);
  }, 2000);
});

function getItems() {
  return promesa;
}

export { getItems };
