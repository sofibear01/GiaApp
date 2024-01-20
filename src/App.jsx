import './App.css'
import Navegacion from './componentes/Navegacion'
import PiePagina from './componentes/PiePagina'
import Login from './pages/Login'
import Imagenes from './pages/Imagenes'
import MisDatos from './pages/MisDatos'
import Tareas from './pages/Tareas'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import { Routes, Route } from 'react-router-dom'




function App() {


  return (
    <>
      <div id="app-container" className="d-flex flex-column min-vh-100">
        <Navegacion />
        <div id="content-wrap" className="flex-grow-1">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/imagenes' element={<Imagenes />} />
            <Route path='/misDatos' element={<MisDatos />} />
            <Route path='/tareas' element={<Tareas />} />
          </Routes>
        </div>
        <PiePagina />
      </div>


    </>
  )
}

export default App
