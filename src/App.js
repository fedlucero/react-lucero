
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/nav/navBar";
import Cart from "./components/Cart/Cart";
import Form from './components/Form/Form'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./components/Context/CartContext";
import Canvas from "./components/Canvas/Canvas";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Canvas/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path="/Form" element={ <Form/> } />
        <Route path='*' element={<p>404</p>}/> 
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
