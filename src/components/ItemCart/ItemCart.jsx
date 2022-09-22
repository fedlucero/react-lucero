import React from 'react';
import { useContext} from 'react';
import {CartContext} from '../Context/CartContext'
import './ItemCart.css'



const ItemCart = ({item}) => {

    const ctx = useContext(CartContext);

    return (
        <div className="itemCartContainer">
            <div className="cartItem">
                <div className="itemCartImg">
                    <img src={ item.img} alt={ item.name}  />
                </div>
                <div className="itemDesciption" style={{color: item.description}}>
                    <p>Item:{item.name}</p>
                    <p>Cantidad:{item.total}</p>
                    <p>Precio:$ {item.price}</p>
                    <p>Subtotal:$ {item.total * item.price}</p>
                </div>
                <div className="btn btnDetalles" style={{backgroundColor: item.description}} onClick={() => ctx.removeItem(item.id)}> 
                   Eliminar producto
                </div>
            </div>
        </div>
    )
}

export default ItemCart;