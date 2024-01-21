
import './PiePagina.css'
import { MDBIcon } from 'mdb-react-ui-kit';



const PiePagina = () => {
    return (
        <footer className="pie-pagina text-center text-lg-start text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Redes sociales: </span>
                </div>

                <div className="d-flex">
                    <a href="https://www.instagram.com/" className="me-4 text-reset">
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href="https://github.com/sofibear01" className="me-4 text-reset">
                        <MDBIcon fab icon="github" />                    
                    </a>
                </div>
            </section>

            <section className="d-flex justify-content-between p-2">
                <div className="mx-auto">
                    <h6 className='text-uppercase fw-bold mb-4'>Herramientas</h6>
                    <p>
                        <a href='https://nodejs.org/en' className='text-reset'>
                            Node
                        </a>
                    </p>
                    <p>
                        <a href='https://es.react.dev/' className='text-reset'>
                            React
                        </a>
                    </p>
                </div>

                <div className="mx-auto">
                    <h6 className='text-uppercase fw-bold mb-4'>Documentación útil</h6>
                    <p>
                        <a href='https://devdocs.io/javascript/' className='text-reset'>
                            Javascript
                        </a>
                    </p>
                    <p>
                        <a href='https://devdocs.io/react/' className='text-reset'>
                            React
                        </a>
                    </p>
                </div>

                <div className="mx-auto">
                    <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
                    <p>
                        <MDBIcon icon="home" className="me-2" />
                        Cordoba, Capital
                    </p>
                    <p>
                        <MDBIcon icon="envelope" className="me-3" />
                        sofibearzotti01@gmail.com
                    </p>
                    <p>
                        <MDBIcon icon="phone" className="me-3" /> 3564358071
                    </p>
                </div>
            </section>

            <div className="text-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <p>&copy; 2024 GiaApp. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};


export default PiePagina;