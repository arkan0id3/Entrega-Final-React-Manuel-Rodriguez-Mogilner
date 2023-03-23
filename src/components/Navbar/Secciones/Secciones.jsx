
import { Link } from "react-router-dom";

const Secciones = ({nombre}) => {

    
    return (
        <>
            <li className="nav-item">
                
                <Link className="nav-link nav-linkedit" to={'/'}>
                    <button className="btn btn-outline-dark btnbrand">
                        <h1>
                            <span className="word">{nombre.substr(0,2)}</span>
                            <span className="word">{nombre.substr(2,7)}</span>                           
                        </h1>
                    </button>
                </Link>
                
            </li>
        </>      
    );
    
}


export default Secciones;

