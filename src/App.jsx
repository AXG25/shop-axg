import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarr from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBarr />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />}/>
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
