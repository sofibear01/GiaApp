
import { Link } from 'react-router-dom';
import Cerrar from './Cerrar';
import cat from '../assets/cat.png';
import './Navegacion.css'

function Navegacion() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary miClase">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        <img src={ cat } alt="icono-cat" className="icono-cat" />
                        Gia App
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/tareas" className="nav-link" aria-current="page">Tareas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/imagenes' className="nav-link" >Imagenes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/misDatos' className="nav-link" >Mis datos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className="nav-link" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/usuarios' className="nav-link" >Usuarios</Link>
                            </li>
                        </ul>


                        <Cerrar />

                        
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navegacion;