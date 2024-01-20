// MisDatos.jsx

import Ficha from '../componentes/Ficha';
import FichaEntrada from '../componentes/FichaEntrada';
import './MisDatos.css';
import { useState } from 'react';

const MisDatos = () => {
  const [datosGata, setDatosGata] = useState(() => {
    const storedData = localStorage.getItem('datosGata');
    return storedData ? JSON.parse(storedData) : {
      nombre: '',
      meses: '',
      peso: '',
      nacimiento: '',
      genero: '',
      telefono: '',
    };
  });

  const [modoEdicion, setModoEdicion] = useState(false);

  const handleEditarDatos = () => {
    setModoEdicion(true);
  };

  const handleGuardarDatos = (nuevosDatos) => {
    setDatosGata(nuevosDatos);
    setModoEdicion(false);

    // Actualizar localStorage cuando se guardan nuevos datos
    localStorage.setItem('datosGata', JSON.stringify(nuevosDatos));
  };

  return (
    <div className="ficha-container">
      {modoEdicion ? (
        <FichaEntrada datosGata={datosGata} onGuardar={handleGuardarDatos} />
      ) : (
        <Ficha datosGata={datosGata} onEditar={handleEditarDatos} />
      )}
    </div>
  );
};

export default MisDatos;
