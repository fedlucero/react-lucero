
import "./navBar.css";

function Navbar() {
  return (
    <nav>
      <div className="tercio">
        <div className="logo"></div>
        <p>.COMTIENDA</p>
      </div>
      <div className="items">
        <a href="">Inicio</a>
        <a href="">Tienda</a>
        <a href="">Contacto</a>
      </div>
    </nav>
  );
}
export default Navbar;
