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


import { Routes, Route, Navigate } from 'react-router-dom'
import CatInfo from './pages/CatInfo'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
     
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };


  return (
    <div id="app-container" className="d-flex flex-column min-vh-100">
      {isLoggedIn && <Navegacion onLogout={handleLogout} />}
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
          <Route
            path="/imagenes"
            element={isLoggedIn ? <Imagenes /> : <Navigate to="/" />}
          />
          <Route
            path="/tareas"
            element={isLoggedIn ? <Tareas /> : <Navigate to="/" />}
          />
          <Route
            path="/catInfo"
            element={isLoggedIn ? <CatInfo /> : <Navigate to="/" />}
          />
          <Route 
            path="/login" 
            element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
          />
        </Routes>
      </div>
      {isLoggedIn && <PiePagina />}
    </div>
  );

}

export default App
