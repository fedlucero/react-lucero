
import cart from "../img/cart.svg"
// import {total} from "../ItemCount/ItemCount"

function CartWidgedt (){

    return(
        <>
        <img className="cart" src={cart} alt="Carrito" />
        {/* <div className="cartCount"><p>3</p></div> */}
        <div className="cartCount"><p>3</p></div>
        </>
    )
}

export default CartWidgedt;