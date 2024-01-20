import './App.css'
import Navegacion from './componentes/Navegacion'
import PiePagina from './componentes/PiePagina'
import Login from './pages/Login'
import Imagenes from './pages/Imagenes'
import MisDatos from './pages/MisDatos'
import Tareas from './pages/Tareas'

import { useState } from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import { Routes, Route } from 'react-router-dom'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('MisDatos'); // Puedes establecer la página que deseas mostrar después de iniciar sesión
  };

  return (
    <div id="app-container" className="d-flex flex-column min-vh-100">
      {isLoggedIn && <Navegacion />}
      <div id="content-wrap" className="flex-grow-1">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <MisDatos />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route path="/imagenes" element={<Imagenes />} />
          <Route path="/tareas" element={<Tareas />} />
        </Routes>
      </div>
      {isLoggedIn && <PiePagina />}
    </div>
  );

}

export default App
