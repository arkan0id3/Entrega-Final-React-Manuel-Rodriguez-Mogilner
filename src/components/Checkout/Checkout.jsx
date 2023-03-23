import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { createOrdenCompra, getOrdenCompra, updateProducto, getProducto } from "../../utils/firebase";
import { useState } from "react";

import React from 'react';

const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    let navigate = useNavigate()
    const datosForm = useRef()
    const [email, setEmail] = useState()
    const [emailConfirmation, setEmailConfirmation] = useState()

    const handeEmailChange = (event) =>{
        setEmail(event.target.value)
    }
    const handeEmailConfirmationChange = (event) =>{
        setEmailConfirmation(event.target.value)
    }
    const isFormValid = () =>{
        return email === emailConfirmation && email !== ""
    }
    const consultarForm = (e) => {
        e.preventDefault()
        
        const data = new FormData(datosForm.current)
        
        const cliente = Object.fromEntries(data)
        
        const aux = [...carrito]
        
        aux.forEach(prodCarrito => { //Desscontar stock de BDD
            getProducto(prodCarrito.id).then(prodBDD =>{
                prodBDD.stock -= prodCarrito.cant // descontar stock
                updateProducto(prodBDD.id, prodBDD)
            })
        })

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast(`🧊Muchas gracias por tu compra! el id de su orden de compra es ${ordenCompra.id} por un total de $${new Intl.NumberFormat('de-DE').format(totalPrice())}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                e.target.reset()
                emptyCart()
        
        
                navigate("/")
        })
        
    }
    

    return (
        <>
            {carrito.length === 0
            ?
            <>
            <h2>Carrito vacio</h2>
                <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
            </>
            :
            
            <div className="container contForm">
            <form onSubmit={consultarForm} ref={datosForm}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={email} onChange={handeEmailChange}required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="emailConfirm" value={emailConfirmation} onChange={handeEmailConfirmationChange}required />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">Documento</label>
                    <input type="number" className="form-control" name="dni" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" name="direccion" required/>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!isFormValid()}>Finalizar compra</button>

            </form>
        </div>}
            </>


        
    );
}

export default Checkout;
