import "./ItemListContainer.css";
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import {productos} from '../productos/productos'
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams();

    // useEffect(() => {
    //     const traerProductos = new Promise((res, rej) => {
    //         setTimeout(() => {
    //             res(productos);
    //         }, 2000);
    //     });
    //     traerProductos
    //         .then((res) => {
    //             setProducts(res);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // },

    useEffect(() => {
        if(idCategory){
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos.filter(item =>item.type === idCategory));
            }, 2000);
        });
        traerProductos
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            });
    
     }
     else{
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
     }
    },[idCategory]);

 


    return (
        <>
            <ItemList items={products} />
        </>
    );
};

export default ItemListContainer;



