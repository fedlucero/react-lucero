import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'



const ItemDetail = ({ item }) => {

    return (
        
        <div className='cardArcDetail'>
            
                <div className='imgArcDetail' >
                    <img src={item.img} alt="" width="200" />
                </div>
                <div className='textArcDetail'>
                    <h2>{item.name}</h2>
                    <h2>$ {item.price}</h2>
                    <h2>{item.id}</h2>
                </div>
            <ItemCount inicial={1} stock={item.stock}  bgBtn={`color-${item.id}`} />
            
            
        </div>
       
  
);
};

export default ItemDetail;