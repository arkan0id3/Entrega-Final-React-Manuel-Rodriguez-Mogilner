import React from 'react';


const Footer = ({nombre}) => {
    return (
        
        <>  
            {
                <footer className="text-center text-lg-start bg-light text-muted">
                    {/* Section: Social media */}
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Conectate con nuestras redes:</span>
                    </div>
                    {/* Left */}
                    {/* Right */}
                    <div>
                        <a href="https://facebook.com/" className="me-4 text-reset">
                            <i className="fa fa-facebook-f" />
                        </a>
                        <a href="https://twitter.com/" className="me-4 text-reset">
                            <i className="fa fa-twitter" />
                        </a>
                        <a href="https://google.com/" className="me-4 text-reset">
                            <i className="fa fa-google" />
                        </a>
                        <a href="https://instagram.com/" className="me-4 text-reset">
                            <i className="fa fa-instagram" />
                        </a>
                        <a href="https://linkedin.com/" className="me-4 text-reset">
                            <i className="fa fa-linkedin" />
                        </a>
                        <a href="https://github.com/" className="me-4 text-reset">
                            <i className="fa fa-github"/>
                        </a>
                    </div>
                    {/* Right */}
                    </section>
                    {/* Section: Social media */}
                    {/* Section: Links  */}
                    <section >
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content */}
                            <h1>
                                <i className="fas fa-gem me-3" /><span className="word brandfooter">{nombre.substr(0,2)}</span>
                                <span className="word brandfooter2">{nombre.substr(2,7)}</span>    
                            </h1>
                            <br />
                            <p>
                            Este e-commerce fue desarrollado como entrega final del curso de React en Coderhouse
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Tecnologías utilizadas
                            </h6>
                            <p>
                                <a href="https://es.reactjs.org/" className="text-reset txtIcons"><span>React</span><img src="/img/icons8-react.svg" alt="" className='svg'/></a>
                                
                            </p>
                            <p>
                                <a href="https://getbootstrap.com/" className="text-reset txtIcons"><span>Boostrap</span><img src="/img/icons8-bootstrap.svg" alt="" className='svg'/></a>
                            </p>
                            <p>
                                <a href="https://www.javascript.com/" className="text-reset txtIcons"><span>Javascript</span><img src="/img/icons8-javascript.svg" alt="" className='svg'/></a>
                            </p>
                            <p>
                                <a href="https://threejs.org/" className="text-reset txtIcons"><span>Three.js</span>
                                    <svg className="svg"fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
                                        <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="#000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
                                            <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
                                            <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
                                            <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
                                            <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
                                            <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
                                            <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
                                        </g>
                                    </svg>
                                </a>
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">
                            Links de utilidad
                            </h6>
                            <p>
                                <a href="https://www.coderhouse.com/" className="text-reset my-2">Coderhouse</a>
                            </p>
                            <p>
                                <a href="https://stackoverflow.com/" className="text-reset ">Stackoverflow</a>
                            </p>
                            <p>
                                <a href="https://open-bootcamp.com/" className="text-reset ">OpenBootcamp</a>
                            </p>                           
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                            <p><i className="fa fa-home me-3" /> La Plata</p>
                            <p>
                            <i className="fa fa-envelope me-3" />
                            pruebafibermanu@gmail.com
                            </p>
                            <p><i className="fa fa-phone me-3" /> + 221 61 20566</p>
                            <p><i className="fa fa-print me-3" /> + 01 234 567 89</p>
                        </div>
                        {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                    </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                    © 2023 Copyright
                    <p className="text-reset fw-bold" > Manuel Rodriguez Mogilner</p>
                </div>
                {/* Copyright */}
              </footer>
            }

        </>
        
        
    )    
}
export default Footer;
