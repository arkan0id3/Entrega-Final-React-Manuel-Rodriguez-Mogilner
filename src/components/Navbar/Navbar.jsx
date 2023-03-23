
import CartWidget from "../CartWidget/CartWidget";
import Categorias from "./Categorias/Categorias";
import Secciones from "./Secciones/Secciones";
import Scene from "./CubeScene/Scene";
import SceneDos from "./CubeScene/SceneDos";
const Navbar = ({nombre}) => {
    
    
    
    return (
        
        <nav className="navbar navbar-expand-lg sticky-top bg-light">
            <div className="container-fluid">                
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="offcanvas offcanvas-start offcanvas-size-sm" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <ul className="navbar-nav flex-grow-1 pe-3">
                        <Scene />
                        <Secciones nombre={nombre}/>
                        
                        <Categorias />
                        
                        <SceneDos />
                        
                    </ul>
                    
                    
                    <CartWidget cantCarrito={10} />
                    
                </div>
            </div>
        </nav>
    );
}


export default Navbar;

