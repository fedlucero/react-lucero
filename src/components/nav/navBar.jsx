
import "./navBar.css";
import {Link} from "react-router-dom";
import "../CartWidget/CartWidget"
import CartWidgedt from "../CartWidget/CartWidget";


function Navbar() {
  return (
    <nav>
      <div className="tercio">
        <div className="logo"></div>
        <Link to='/'><p>.COMTIENDA</p></Link>
      </div>
      <div className="items">
        <Link className="link" to='/category/blue'><p>Blue</p></Link>
        <Link className="link" to='/category/green'><p>Green</p></Link>
        <Link className="link" to='/category/red'><p>Red</p></Link>
        <CartWidgedt/>
      </div>
    </nav>
  );
}
export default Navbar;
