import React from 'react';
import './item.css'
import ItemCount from "../ItemCount/ItemCount";
import{ Link } from 'react-router-dom'


// import './item.css';


const Item = ({ item }) => {
    return (
        <Link to={`/item/${item.id}`}>
            <div className='cardArc' key={item.id}>
              
                    <div className='imgArc' >
                        <img src={item.img} alt="" width="200" />
                    </div>
                    <div className='textArc'>
                        <h2 style={{color: item.description}} className={`textColor-${item.id}`}>{item.name}</h2>
                        <h2 style={{color: item.description}} className={`textColor-${item.id}`}>$ {item.price}</h2>
                    </div>
                     <div className={`btn btnDetalles color-${item.id}`} style={{'background-color': item.description}} >
                        Detalles
                    </div>
                    
                
            </div>
            </Link>
           
      
    );
};
export default Item;
