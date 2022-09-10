import React from 'react';
import Item from '../Item/Item';
import './itemList.css'
import MyLoader from '../Loader/Loader';

const ItemList = ({ items }) => {
    // return (
    //     <div className='containerArc' >
    //         {items.map((item) => (
    //             <Item key={item.id} item={item} id={item.id} type={item.type} name={item.name} price={item.price} stock={item.stock} img={item.img} description={item.description} estilo={item.estilo} />
    //         ))}
    //     </div>
    // );
    return (
            <div className='containerArc' >
                    {
            items.length > 0
            ? items.map((item) => (
                <Item key={item.id} item={item} id={item.id} type={item.type} name={item.name} price={item.price} stock={item.stock} img={item.img} description={item.description} estilo={item.estilo} />
            ))
            : <MyLoader/>
        }
            </div>
    );
};
export default ItemList;