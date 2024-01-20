import { useState } from 'react';
import ListaTareas from '../componentes/ListaTareas';
import Button from 'react-bootstrap/Button';
import './Tareas.css'

const Tareas = () => {
  const [ tareas, setTareas ] = useState([]);

  const agregarTarea = (descripcion) => {
    const nuevaTarea = {
      id: tareas.length + 1,
      tarea: descripcion,
      fecha: new Date().toLocaleDateString(),
      estado: 'Pendiente',
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const completarTarea = (id) => {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, estado: 'Completada' } : tarea
    );
    setTareas(nuevasTareas);
  };

  const handleBorrarTodas = () => {
    setTareas([]);
  };

  const borrarTarea = (id) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(nuevasTareas);
  };

  const handleBorrarCompletas = () => {
    const tareasPendientes = tareas.filter((tarea) => tarea.estado !== 'Completada');
    setTareas(tareasPendientes);
  };

  return (
    <div className='contenedor-principal'>
      <ListaTareas tareas={tareas} onCompletar={completarTarea} onAgregarTarea={agregarTarea} onBorrarTarea={borrarTarea}/>
      <Button variant="danger" onClick={handleBorrarTodas} className='boton-borrarTodo'>Borrar todo</Button>
      <Button onClick={handleBorrarCompletas} className='btn-borrar-completas'>Borrar tareas completas</Button>
    </div>
  );
};

export default Tareas;
