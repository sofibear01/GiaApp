


const Cerrar = () => {

    const cerrarSesion = () => {
        window.sessionStorage.removeItem('usuario');
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