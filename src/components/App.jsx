
import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
//React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//Context
import { CarritoProvider } from '../context/CarritoContext';
//Toastify
import { ToastContainer} from 'react-toastify';

// firebase
//import { cargarBDD } from '../utils/firebase';
import { getProductos, updateProducto, deleteProducto } from '../utils/firebase';




//Componentes
import Navbar from './Navbar/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Checkout  from './Checkout/Checkout';
import Cart  from './Cart/Cart';
import Footer from './Footer/Footer';



// class => className
// <input type="text"></input>  =>  <input type="text" />
// style ="nombrePropiedad: valor" => style={{"nombrePropiedad" : "valor"}}
// `${}`  =>   {}     para pasar código js al html ahora solo hacen falta {}
const App = () => {
  //cargarBDD()
  getProductos()
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar nombre={"3Dshop"}/>
          <Routes>
            <Route path='/'element={<ItemListContainer/>}/>
            <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/cart' element={<Cart/>}/>    
          </Routes>
          <ToastContainer/>
        </CarritoProvider>
        <Footer nombre={"3Dshop"}/>
      </BrowserRouter>
    </>
  );
}

export default App;

