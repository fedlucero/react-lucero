import "./ItemListContainer.css";
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebaseConfig";



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams();

   
    useEffect(()=>{

        if(idCategory) {
            const q = query(collection(db, "products"), where("type", "==", idCategory));
            const querySnapshot = getDocs(q);
            queryFunction(querySnapshot);
        } else {
            const querySnapshot = getDocs(collection(db, "products"),orderBy('name'));
            queryFunction(querySnapshot);
        }

        function queryFunction(querySnapshot) {
            querySnapshot.then((resultado) => {
                const productos_mapeados = resultado.docs.map(referencia => {                   
                    const aux = referencia.data();
                    aux.id = referencia.id;
                    return aux;
                })
                setProducts(productos_mapeados);
            })
            querySnapshot.catch((error) => alert(error));
        }

    },[idCategory]);

    return (
            <ItemList items={products} />
    );
}


  


export default ItemListContainer;



