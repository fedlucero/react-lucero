
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import { doc, setDoc, collection, updateDoc } from "firebase/firestore";
import { increment, serverTimestamp } from "firebase/firestore";
import { db } from '../../utils/firebaseConfig';
import './cart.css'
import Swal from 'sweetalert2';


// function Cart(){
//     // const { items, totalPrice, clearCart } = CartContext();
//     const ctx = CartContext();

const Cart = () => {
    const ctx = useContext(CartContext);

    const createOrder = async () => {
        let itemsForDB = ctx.cart.map(item => ({
            id:item.id,
            title:item.name,
            price:item.price,
            quantity:item.total
        }))
        let order = {
            buyer: {
                name:'nombre',
                mail:'mail',
                phone:'tel'
            },
            items: itemsForDB,
            date: serverTimestamp(),
            total:ctx.totalPrice()      
        }
        // console.log(order)
        const newOrderRef = doc( collection(db, "orders") )
        await setDoc( newOrderRef, order)
        Swal.fire(
            'Tu orden fue creada!',
            "Este es tu ID de orden: "+ newOrderRef.id
        )
        ctx.clearCart()

        
        
    }
        
  
    return (
        
            <>
                
                {ctx.cart.length === 0 ? (  
                <div className="cartVacio">
                        <p className="mensajeCarritoVacio">El carrito esta vacio</p>
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
                        <div className={`btn btnDetalles`} onClick={createOrder}> 
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