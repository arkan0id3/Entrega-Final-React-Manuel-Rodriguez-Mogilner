// Consulta la base de datos de mis productos y la renderiza
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
//import { consultarBDD } from "../../utils/funciones.js";
import { getProductos } from '../../utils/firebase.js';
import ItemList from '../ItemList/ItemList.jsx';
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()

    


    useEffect(() => {
        /*
        const consultarDatos = async() => {
            const prods = await consultarBDD('./json/productos.json')
            console.log(prods)
        }
        
        consultarDatos()
        */
        
        if (idCategoria) { //undefined me da falso
            getProductos().then(products => {
                const prods = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria[1] === idCategoria)
                const items = <ItemList prods={prods} plantilla="Item" />
                setProductos(items)
                
                

            })
            
            
        } else {
            getProductos().then(products => {
                const prods = products.filter(prod => prod.stock > 0)
                const items = <ItemList prods={prods} plantilla="Item" />
                setProductos(items)
            })
        }
    }, [idCategoria])
      
        return (
            <div className='row cardProductos'>
                {productos}
            </div>
        )
        
}

export default ItemListContainer;
