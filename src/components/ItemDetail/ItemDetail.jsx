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
                    <h2 className={`textColor-${item.id}`}>{item.name}</h2>
                    <h2 className={`textColor-${item.id}`}>$ {item.price}</h2>
                    <h2 className={`textColor-${item.id}`}> Cirulo de color {item.description}</h2>
                </div>
            <ItemCount inicial={1} stock={item.stock}  bgBtn={`color-${item.id}`}   textColor={`textColor-${item.id}`}/>
            
            
        </div>
       
  
);
};

export default ItemDetail;