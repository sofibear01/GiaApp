import { useState } from 'react';
import PropTypes from 'prop-types';
import catIcon from '../assets/cat.png';



const Login = ({ onLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {

        if (email == '' || password == '') {
            alert('Debe ingresar un email y un password');
            limpiarDatos();
            return;
        }

        if (email == 'sofibearzotti@gmail.com' && password == 'gia2407') {
            alert('Bienvenida sofia!!!');
            window.sessionStorage.setItem('usuario', email);
            onLogin();

        } else {
            alert('Email o Password incorrectos');
        }
        limpiarDatos();

    }

    function limpiarDatos() {
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <div className="text-center mt-5 mb-5">
                <img 
                src={ catIcon } 
                alt="icono-cat" 
                className="icono-cat" 
                style={{ width: '80px', height: '80px' }}/>
                <h1 className="d-inline-block ml-2">Gia App</h1>
            </div>
            <h3 className="text-center mt-5 mb-5">
                Iniciar sesion
            </h3>
            <div className="container">
                <form id="formLogin">
                    <div className="mb-3">
                        <label className="form-label">Email </label>
                        <input
                            type="email"
                            className="form-control"
                            /* id="nombre" */
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password </label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={login} type="button" className="btn btn-success w-50">Login</button>
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={limpiarDatos} className="btn btn-danger w-50">Reset</button>
                    </div>
                </form>
            </div>
        </>
    )
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default Login;