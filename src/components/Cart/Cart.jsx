import React from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import './cart.css'



function Cart(){
    const { cart, totalPrice, clearCart } = CartContext();
   
  
    return (
        
            <>
                
                {cart.length === 0 ? (  
                <div className="cartVacio">
                        <p className="mensajeCarritoVacio">El carrito esta vacio</p>
                        <Link to={'/'}><div className={`btn volver coloresFondo`}>Volver a la tienda</div></Link>
                        <div className='vacio'></div>
                </div>
                ) : (
                <div className="cartConArc"> 
                    <div className="cartItem">            
                        {
                            cart.map(item => <ItemCart key={item.id} item={item} />)
                        }
                    </div>
                    <div className='vacio'></div>

                    <div className='cartContext'>
                        
                        <p className="cartTotal">
                                Total : $ {totalPrice()}
                        </p>
                       <div className={`btn coloresFondo`} onClick={ clearCart  }>Vaciar carrito</div>
                        <div className={`btn coloresFondo`}>
                             <Link style={{color:'white'}} to="/">Seguir comprando</Link>
                        </div>
                        <div className={`btn coloresFondo`}> 
                            <Link to="/Form">
                            <div style={{color:'white'}}  >Comprar</div>
                            </Link>
                        </div>
                            
                                
                        
                    </div>
                    

                </div>    
                )
                }
            </>
   )
}
export default Cart;