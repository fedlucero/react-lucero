
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import './cart.css'


// function Cart(){
//     // const { items, totalPrice, clearCart } = CartContext();
//     const ctx = CartContext();

const Cart = () => {
    const ctx = useContext(CartContext);
        
  
    return (
        
            <>
                
                {ctx.cart.length === 0 ? (  
                <div className="cartVacio">
                        <p className="mensajeCarritoVacio">No hay arcs en el carrito</p>
                        <Link to={'/'}><div className={`btn volver btnDetalles`}>Volver a la tienda</div></Link>
                </div>
                ) : (
                <div className="cartConArc"> 
                    <div className="cartItem">            
                        {
                            ctx.cart.map(item => <ItemCart key={item.id} item={item} />)
                        }
                    </div>
                    <div className='cartContext'>
                        
                        <p className="cartTotal">
                                Total : $ {ctx.totalPrice()}
                        </p>
                       <div className={`btn btnDetalles`} onClick={ ctx.clearCart  }>Vaciar carrito</div>
                        <div className={`btn btnDetalles`}>
                             <Link style={{color:'white'}} to="/">Seguir comprando</Link>
                        </div>
                        <div className={`btn btnDetalles`}> 
                            <div style={{color:'white'}}  >Realizar Compra</div>
                        </div>
                                
                        
                    </div>
                </div>    
                )
                }
            </>
   )
}
export default Cart;