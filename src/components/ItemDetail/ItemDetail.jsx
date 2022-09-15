import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'
import{ Link } from 'react-router-dom'
import total from '../ItemCount/ItemCount'



const ItemDetail = ({ item }) => {
    

    return (
        
        <div className='cardArcDetail'>
            
                <div className='imgArcDetail' >
                    <img src={item.img} alt="" width="200" />
                </div>
                <div className='textArcDetail'>
                    <h2 style={{color: item.description,}}>{item.name}</h2>
                    <h2 style={{color: item.description}}>$ {item.price}</h2>
                    <h2 style={{color: item.description}}> Cirulo de color {item.description}</h2>
                </div>
            <ItemCount inicial={0} stock={item.stock}  style={{'background-color': item.description}}  styleText={{color: item.description}}/>
            
             {   total === 0
                ? <ItemCount inicial={0} stock={item.stock}  style={{'background-color': item.description}}  styleText={{color: item.description}}/>
                : <Link to={`/cart`}><div className={`btn btnDetalles`} >Al carrito</div></Link>
            
             } 
            
        </div>
       
  
);
};

export default ItemDetail;