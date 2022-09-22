
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/nav/navBar";
import Cart from "./components/Cart/Cart";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./components/Context/CartContext";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<p>404</p>}/> 
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
