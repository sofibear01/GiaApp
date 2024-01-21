import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


const Cerrar = ( { onLogout } ) => {
    const navigate = useNavigate();

    const cerrarSesion = () => {
        if (onLogout) {
            onLogout();
        }
        window.sessionStorage.removeItem('usuario');
        localStorage.removeItem('datosGata');
        navigate('/login');
    }


    return(
        <button 
            className="btn btn-outline-danger"
            onClick={ cerrarSesion } 
        >Cerrar Sesión
        </button>
    )
}

Cerrar.propTypes = {
    onLogout: PropTypes.func.isRequired,
};

export default Cerrar;