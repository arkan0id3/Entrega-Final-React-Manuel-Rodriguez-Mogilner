import { Link } from "react-router-dom";
import {React} from "react"
const Categorias = () => {
    return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                </a>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={'/category/lampara'}>Lámparas</Link></li>
                    <li><Link className="dropdown-item" to={'/category/lapicero'}>Lapiceros</Link></li>
                    <li><Link className="dropdown-item" to={'/category/macetero'}>Maceteros</Link></li>
                </ul>
            </li>
    );
        
}

export default Categorias;
