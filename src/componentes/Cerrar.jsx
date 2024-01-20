import { useNavigate } from 'react-router-dom';

const Cerrar = ( { onLogout } ) => {
    const navigate = useNavigate();

    const cerrarSesion = () => {
        if (onLogout) {
            onLogout();
        }
        window.sessionStorage.removeItem('usuario');
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


export default Cerrar;