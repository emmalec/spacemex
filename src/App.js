import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
