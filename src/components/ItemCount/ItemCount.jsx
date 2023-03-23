import React from 'react';
import { useState } from 'react';

const ItemCount = ({ValInicial, stock, onAdd, textBoton}) => {
    const [contador, setContador] = useState(1) // Defino un estado con valor inicial 1


    const sumar = () => contador < stock && setContador(contador + 1)
    const restar = () => contador > ValInicial && setContador(contador - 1)  
    return (
        <div className="itemCount">
            <div>
                <button className='btn btn-outline-primary ' onClick={() => restar()}>-</button>
                {contador}
                <button className='btn btn-outline-primary' onClick={() => sumar ()}>+</button>
            </div>
            <button className="btn btn-success" onClick={()=> onAdd(contador)}>{textBoton}</button>
        </div>
    );
}

export default ItemCount;
