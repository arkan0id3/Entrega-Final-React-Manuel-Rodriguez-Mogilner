import { useContext, createContext, useState } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([])
    
    //Si existe producto en el carrito, si no existe retorna undefined
    const isInCart = (id) => {
        return carrito.find(prod => prod.id === id)
    }

    //Agregar "" ""

    const addItem = (producto, cantidad) =>{
        // si existe en el carrito, modifico cantidades
        if(isInCart(producto.id)) {
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux =[...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
            
        }else{
            //si no existe en el carrito, lo creo y lo guardo
            const prodCart = {
                ...producto,
                cant: cantidad
            }
            setCarrito([...carrito, prodCart])
        }
       
    }



    //Eliminar ""

    const removeItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    //Vaciar ""

    const emptyCart = () => {
        setCarrito([])
    }


    //Cantidad total de prod

    const getItemQuantity = () => {
        //return carrito.lenght
        return carrito.reduce((acum, prod) => acum += prod.cant, 0)
    }

    //Precio total de la compra

    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }
    console.log(carrito)
    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice }}>
            {props.children}
        </CarritoContext.Provider>
    )

}