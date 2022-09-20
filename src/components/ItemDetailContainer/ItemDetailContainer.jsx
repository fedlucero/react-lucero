import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
// const {productos} = require('../productos/productos');
import {productos} from '../productos/productos';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        const getItem = new Promise ((res, rej) => {
            setTimeout(() => {
                res(productos.find(item => item.id === parseInt(idItem)));
                // res(productos);
            }, 2000);
        });

        getItem
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
             });
    }, [idItem]);

    return (
            
             <ItemDetail item={item} />
      
        
    )
};

export default ItemDetailContainer;
