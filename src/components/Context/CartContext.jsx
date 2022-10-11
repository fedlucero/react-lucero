
import { createContext, useState } from "react";

export const CartContext = createContext();



const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addItem = ( item, total ) => {
        if( isInCart( item.id ) ){
            setCart( cart.map( item => {
            return item.idItem === item.id ? { ...item, total: item.total + total } : item 
        } )); 
    } else {
        setCart( [...cart, { ...item, total: total } ] )
    }
  };

  const itemQuantity = (item) => {
    const auxItem = {...item,total: 0}
    return auxItem;
}

    const clearCart = () => setCart( [] );
    
    const isInCart = ( id ) => cart.some( item => item.id === id );
    
    const removeItem = ( id ) => setCart( cart.filter( item => item.id !== id ) );

    const totalPrice = () => cart.reduce((prev, act) => prev + act.total * act.price, 0 );

    const totalItems = () => cart.reduce((acumulador, itemActual) => acumulador + itemActual.total, 0 );

    return (
        <CartContext.Provider value= { {
            cart,
            clearCart,
            itemQuantity,
            isInCart,
            removeItem,
            addItem,
            totalPrice,
            totalItems,
            
        } }>
            { children }
        </CartContext.Provider>


    )
};

export default CartProvider;