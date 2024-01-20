
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();

    const login = () =>{

        if(email == '' || password == ''){
            alert('Debe ingresar un email y un password');
            limpiarDatos();
            return;
        }

        if(email == 'sofibearzotti@gmail.com' && password == 'gia2407'){
            alert('Bienvenida sofia!!!');

            //Guardar la sesión del usuario
            window.sessionStorage.setItem('usuario', email);

            navigate('/admin');

        }else{
            alert('Email o Password incorrectos');
            navigate('*')
        }

        limpiarDatos();

    }

    function limpiarDatos() {
        setEmail('');
        setPassword('');
    }


    return (

        <>
            <h1 className="text-center mt-5 mb-5">
                Form de Login Admin
            </h1>

            <div className="container">
                <form id="formLogin">
                    <div className="mb-3">
                        <label className="form-label">Email </label>
                        <input 
                            type="email" 
                            className="form-control" 
                            /* id="nombre" */ 
                            value = { email }
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password </label>
                        <input 
                            type="password" 
                            className="form-control"  
                            value = { password }
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ login } type="button" className="btn btn-success w-50">Login</button>
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ limpiarDatos } className="btn btn-danger w-75">Reset</button>
                    </div>
                </form>
            </div>

            <Link to="/">
                <h2 className="text-center mt-5 mb-5">
                    Ir a la Página Principal
                </h2>
            </Link>

        </>
    )
}
export default Login;