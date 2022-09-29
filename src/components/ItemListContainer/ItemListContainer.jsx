import "./ItemListContainer.css";
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { firestoreFetch } from '../../utils/firestoreFetch'
// import {productos} from '../productos/productos'
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams();

   
    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setProducts(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setProducts([]);
        })
    }, []);

    return (
            <ItemList items={products} />
    );
}


  


export default ItemListContainer;



