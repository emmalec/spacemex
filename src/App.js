import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import CartContextProvider from "../context/CartContext";
import Cart from "../components/Cart";

function App() {
  return (
    <>
      <CartContextProvider>
        <NavBar />
        {/* Aca se muestran los diferentes componentes de la URL*/}
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Bienvenido a la tienda de SpaceMex." />
            }
          />
          <Route path="/producto/:itemId" element={<ItemDetailContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </>
  );
}

export default App;
