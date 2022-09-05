import "./ItemListContainer.css";
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import {productos} from '../productos/productos'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
            }, 2000);
        });
        traerProductos
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <>
            <ItemList items={products} />
        </>
    );
};

export default ItemListContainer;



