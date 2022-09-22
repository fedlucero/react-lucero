
import cart from "../img/cart.svg"
import { useContext} from 'react';
import {CartContext} from '../Context/CartContext'

function CartWidgedt (){
    const ctx = useContext(CartContext);
    return(
        <>
        <img className="cart" src={cart} alt="Carrito" />
      
        <div className="cartCount"> { ctx.totalItems() || '0'}</div>
        </>
    )
}

export default CartWidgedt;

