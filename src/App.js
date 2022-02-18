import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function App() {
  return (
    <>
      <CartContext.Provider value={[]}>
        <NavBar />
        {/* Aca se muestran los diferentes componentes de la URL */}
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Hola, bienvenido a la tienda." />
            }
          />
          <Route path="/producto/:itemId" element={<ItemDetailContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer greeting="Nombre de la categoria" />}
          />
        </Routes>
      </CartContext.Provider>
    </>
  );
}

export default App;
