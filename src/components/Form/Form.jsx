import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner'
import './Form.css';
import {useCartContext} from '../Context/CartContext'
import { addDoc, collection, getFirestore, doc, updateDoc } from 'firebase/firestore';

function Form(){
    const {cart, totalPrice, clearCart } = useCartContext();
    const [orderId, setOrderId] = useState(false);
    const [loading, setLoading] = useState(false)
    const [buyer, setBuyer] = useState({
        Nombre:'',
        Domicilio:'',
        Localidad:'',
        Telefono:'',
        Email:'',
        ConfirmarEmail:''
    });

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
	const telefonoRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

    const { Nombre, Domicilio, Localidad, Telefono, Email, ConfirmarEmail } = buyer

    const handleInputChange = (e) => {

        const { name, value } = e.target
        setBuyer(({
            ...buyer,
            [name]:value
        }))
    }

    function updateStocks(cart) {
        cart.forEach((cart) => {
            const db = getFirestore();
            const stockDoc = doc(db, 'data', cart.id);
            updateDoc(stockDoc, { stock: cart.stock - cart.quantity });
            
        });
    }
    
    const addOrder = () => {

        setLoading(true)

        const order = {
            
            buyer,
            items: cart.map((product) => ({
                id: product.id,
                title: product.nombre,
                price: product.precio,
                quantity: product.quantity,
            })),
            date: Date(),
            total: totalPrice()
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id)
            updateStocks(cart)
            setLoading(false)
        });
        
    };

    const handleSubmit  = (e) => {
        e.preventDefault()
        addOrder();
        clearCart();
    }
    
    
    if( orderId != "" ) {
        return (
            <div className="tiketContenedor">
                <div className="tiket">
                    <h2 className="tiketTitulo">¡Muchas gracias por tu compra!</h2>
                    <h3 className="tiketCliente">**{(buyer.Nombre).toUpperCase()}**</h3>
                    <p className="compra">La compra se ha realizado exitosamente</p>
                    <p className="compra">Te enviamos un mail a <span className="mail">{(buyer.Email)}</span></p>
                    <p className="compra">Tu nro. de orden es:</p>
                    <p className="TiketId">{orderId}</p>
                    <h2 className="tiketTituloBar">Rodolfo's Beer&Burger</h2>
                    <Link to={'/'}><p className="carta">Realizar otra compra</p></Link>
                </div>
            </div>                        
        )
    }

    return (
    <>
        <h1 className="FinalizandoCompra">Finalizando Compra</h1>
        {
        loading ? 
        <Spinner /> : ( 
        !orderId&&
        <div className="formContenedorPrincipal">
            <div className="formContenedor">
                <form  onSubmit={ handleSubmit }  className="form">
                    <h2 className='formText'>Completar Datos:</h2>
                    <input 
                        type="text"
                        name="Nombre"
                        placeholder=' Nombre Completo'
                        value={Nombre}
                        required
                        onChange={handleInputChange} 
                    />
                     <input 
                        type="text"
                        name="Domicilio"
                        placeholder=' Domicilio'
                        value={Domicilio}
                        required
                        onChange={handleInputChange} 
                    />
                    <input
                        type="text"
                        name="Localidad"
                        placeholder=' Localidad'
                        value={Localidad}
                        required
                        onChange={handleInputChange} 
                    />
                    <input
                        min="0"
                        type="tel"
                        name="Telefono"
                        placeholder=' Telefono'
                        value={Telefono}
                        required
                        onChange={handleInputChange} 
                    />
                    <input
                        type="email"
                        name="Email"
                        placeholder=' mail@ejemplo.com'
                        value={Email}
                        required
                        onChange={handleInputChange}
                    />
                    <input 
                        type="email"
                        name="ConfirmarEmail"                            
                        placeholder=" Confirme su email "
                        value={ConfirmarEmail}
                        required
                        onChange={handleInputChange} 
                    />
                    {
                        buyer.Nombre && buyer.Domicilio && buyer.Telefono 
                        && (buyer.Email === buyer.ConfirmarEmail) 
                        && telefonoRegex.test(buyer.Telefono) 
                        && emailRegex.test(buyer.Email, buyer.ConfirmarEmail)
                    ? (
                        // Botón habilitado
                        <input 
                            className="finalizarCompraActive"
                            type="submit"
                            value="Finalizar Compra"
                        />
                    ) : (
                        // Botón deshabilitado
                        <input 
                        className="finalizarCompraDisable"
                        type="subbmit"
                        value="Finalizar Compra"
                        disabled
                    />
                    )
                    }
                </form>
           </div>
        </div>
        )}
    </>    
    )                        
}
export default Form;