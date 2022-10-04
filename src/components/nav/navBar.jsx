
import "./navBar.css";
import {Link} from "react-router-dom";
import "../CartWidget/CartWidget"
import CartWidgedt from "../CartWidget/CartWidget";


function Navbar() {
  return (
    <nav>
      <div className="tercio">
        <div className="logo coloresFondo"></div>
        <Link to='/'><p className="colores">.COMTIENDA</p></Link>
      </div>
      <div className="items">
        <Link className="link" to='/category/blue'><p className="azules">Blue</p></Link>
        <Link className="link" to='/category/green'><p className="verdes">Green</p></Link>
        <Link className="link" to='/category/red'><p className="rojos">Red</p></Link>
        <CartWidgedt/>
      </div>
    </nav>
  );
}
export default Navbar;
