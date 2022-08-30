import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/nav/navBar";
import "./App.css";

function App() {
  return (
    <>
    <NavBar />
    <ItemCount inicial={1} stock={5}/>
    <ItemListContainer titulo=".COMTIENDA"/>
  </>
  );
}

export default App;
