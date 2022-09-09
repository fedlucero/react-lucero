import React from 'react';
import './item.css'
import ItemCount from "../ItemCount/ItemCount";
import{ Link } from 'react-router-dom'


// import './item.css';


const Item = ({ item }) => {
    return (
        
            <div className='cardArc' key={item.id}>
                <div>
                    <div className='imgArc' >
                        <img src={item.img} alt="" width="200" />
                    </div>
                    <div className='textArc'>
                        <h2>{item.name}</h2>
                        <h2>$ {item.price}</h2>
                        <h2>{item.id}</h2>
                    </div>
                   
                </div>
                <div>
                <ItemCount inicial={1} stock={item.stock} bgBtn={`color-${item.id}`} textColor={`textColor-${item.id}`} />
                <Link to={`/item/${item.id}`}> <div className={`btn btnDetalles color-${item.id}`}>
                        Detalles
                    </div></Link>
                </div>
                
            </div>
           
      
    );
};
export default Item;
