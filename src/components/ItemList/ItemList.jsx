import React from 'react';
import Item from '../Item/Item';
import './itemList.css'

const ItemList = ({ items }) => {
    return (
        <div className='containerArc' >
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};
export default ItemList;