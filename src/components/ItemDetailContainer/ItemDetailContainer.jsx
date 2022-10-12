import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { firestoreFetchOne } from "../../utils/firestoreFetch";
import MyLoader from '../Loader/Loader';


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const [Loading, setLoading] = useState(true);
    const { idItem } = useParams();

    useEffect(() => {
        setLoading(true);
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
            setLoading(false);
    }, [idItem]);
    
    // return (
        
    //     <ItemDetail item={dato} />
    // );

    return(  
        <>
            {
                Loading ? (
                <MyLoader />
                ) : (
                    <ItemDetail item={dato} />
                )
            }           
        </>
    );


}

export default ItemDetailContainer;
