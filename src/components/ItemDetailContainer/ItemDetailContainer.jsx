import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { firestoreFetchOne } from '../../utils/firestoreFetch';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {idItem} = useParams();
    
  
    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setItem(result))
            .catch(err => console.log(err))
    }, [idItem]);
    
    return (
        <ItemDetail item={item} />
    );
}




export default ItemDetailContainer;
