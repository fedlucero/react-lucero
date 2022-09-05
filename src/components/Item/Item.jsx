import React from 'react';
import './item.css'
import ItemCount from "../ItemCount/ItemCount";

// import './item.css';


const Item = ({ item }) => {
    return (
            <div className='cardArc'>
                <div>
                    <div className='imgArc' >
                        <img src={item.img} alt="" width="200" />
                    </div>
                    <div className='textArc'>
                        <h2>{item.name}</h2>
                        <h2>$ {item.price}</h2>
                        <h2>{item.description}</h2>
                    </div>
                </div>
                <div>
                <ItemCount inicial={1} stock={item.stock} />
                </div>
                
            </div>
      
    );
};
export default Item;
