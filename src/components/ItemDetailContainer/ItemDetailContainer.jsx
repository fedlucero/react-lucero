import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { firestoreFetchOne } from "../../utils/firestoreFetch";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;
