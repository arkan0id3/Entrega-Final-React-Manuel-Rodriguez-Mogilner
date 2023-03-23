import { Link } from "react-router-dom";
const Item = ({item}) => {
    return (
        
        <div className="card mb-3 cardProducto border-light" style={{width: '18rem'}}>
            <img src={item.img} className="card-img-top" alt={`imagen de ${item.nombre}`} />
            <div className="card-body cardBody">
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <p className="card-text"> {item.marca}</p>
                <p className="card-text"> ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <Link className="nav-link" to={`/item/${item.id}`}><button className="btn btn-dark">Ver Producto</button></Link>
            </div>
        </div>    
        
    );
}

export default Item;
