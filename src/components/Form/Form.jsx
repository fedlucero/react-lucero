import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../Context/CartContext'
import { addDoc, collection, getFirestore, doc, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import './Form.css';
import { db } from '../../utils/firebaseConfig';


function Form(){
    const ctx = useContext(CartContext);
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
            updateDoc(stockDoc, { stock: cart.stock - cart.total });
            
        });
    }
    
    const addOrder = () => {

        setLoading(true)

        const order = {
            
            buyer,
            items: ctx.cart.map((product) => ({
                id: product.id,
                title: product.name,
                price: product.price,
                total: product.total,
            })),
            date: Date(),
            total: ctx.totalPrice()
        }

        // const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id)
            updateStocks(ctx.cart)
            setLoading(false)
        });
        
    };

    const handleSubmit  = (e) => {
        e.preventDefault()
        addOrder();
        ctx.clearCart();
    }
    
    
    if( orderId != "" ) {
        return (
            <div className="ticketContainer">
                <div className="ticket">
                    <h2 className="ticketTitulo colores">¡Muchas gracias por tu compra!</h2>
                    <h3 className="ticketCliente colores">{(buyer.Nombre).toUpperCase()}</h3>
                    <p className="compra">La compra se ha realizado exitosamente</p>
                    <p className="compra">Te enviamos un mail a <span className="mail">{(buyer.Email)}</span></p>
                    <p className="compra">Tu nro. de orden es:</p>
                    <p className="TicketId">{orderId}</p>
                    <h2 className="ticketTienda colores">COMTIENDA</h2>
                    <Link to={'/'}><p className="btn coloresFondo">Realizar otra compra</p></Link>
                </div>
            </div>                        
        )
    }

    return (
    <>
        <div className='contenedorFin'>
        <h1 className="FinalizandoCompra colores">Finalizando Compra</h1>
        </div>
        {
        loading ? 
        <div>cargando..</div> : ( 
        !orderId&&
        <div className="contenedorPrincipal">
        <div className="formContenedor">
                <form  onSubmit={ handleSubmit }  className="form">
                    <h2 className='formText'>Completar Datos:</h2>
                    <input 
                        type="text"
                        name="Nombre"
                        placeholder='Nombre Completo'
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
                            className="btn coloresFondo"
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