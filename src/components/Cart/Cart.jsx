import React from 'react';
import { Link } from "react-router-dom"
import  ItemList  from "../ItemList/ItemList"
import { useCarritoContext } from '../../context/CarritoContext';
import StickyBox from "react-sticky-box";



const Cart = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
  
    return (
        <>
        {
            carrito.length === 0
            ? //Si no existen productos en el carrito
            <div className='carritoDivV'> 
                <h2 className="hCarritoV">Carrito vacio</h2>
                <img src="/img/cart-svgrepo-com.svg" alt="imagen de carrito" className="carritoV" />
                <Link className="nav-link btnCarritoV" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
            </div>
            : //Si existen productos en el carito
            <div className="container cartContainer">
                <div className="cardsCartDiv">
                    <ItemList prods={carrito} plantilla="ItemCart"/>
                </div>
                <div className="divButtons">
                    <StickyBox offsetTop={120} offsetBottom={100}>
                        <p>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <Link className="nav-link" to={"/checkout"}><button className="btn btn-outline-success">Finalizar Compra</button></Link>                        
                        <Link className="nav-link" to={"/"}><button className="btn btn-outline-info">Continuar comprando</button></Link>
                        <button className="btn btn-outline-danger" onClick={() => emptyCart()}>Vaciar Carrito</button>
                        
                    </StickyBox>    
                </div>
            </div>
        }
        
        </>
    )

}


export default Cart;
