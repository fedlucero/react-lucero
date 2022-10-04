import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'
import{ Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Swal from 'sweetalert2';


const ItemDetail = ({ item }) => {
    const[total,setTotal] = useState(0)
    const ctx = useContext(CartContext);
    console.log(total);

    const Agregar = (total)=> {
        setTotal(total)
        // alert(`Se agregaron ${total} al carrito`)
        Swal.fire(
            `Se agregaron ${total} items al carrito`
        )
        console.log(total);
        ctx.addItem(item,total)
    }
 

    return (
        
        <div className='cardArcDetail'>
            
                <div className='imgArcDetail' >
                    <img src={item.img} alt="" width="200" />
                </div>
                <div className='textArcDetail'>
                    <h2 style={{color: item.description,}}>{item.name}</h2>
                    <h2 style={{color: item.description}}>$ {item.price}</h2>
                    <h2 style={{color: item.description}}> Cirulo de color {item.description}</h2>
                    <h2 style={{color: item.description}}> Stock: {item.stock}</h2>
                </div>
            {/* <ItemCount inicial={0} stock={item.stock}  seAgrego={Agregar} style={{backgroundColor: item.description}}  styleText={{color: item.description}}/> */}
            
             {   total === 0
                ? <ItemCount inicial={0} stock={item.stock} seAgrego={Agregar}  style={{backgroundColor: item.description}}  styleText={{color: item.description}}/>
                :
                <Link to={`/cart`}><div className={`btn btnDetalles`} >Al carrito</div></Link>

             } 
            
        </div>
       
  
);
};

export default ItemDetail;