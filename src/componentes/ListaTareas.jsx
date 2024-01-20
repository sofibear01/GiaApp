import { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import './ListaTareas.css';
import PropTypes from 'prop-types';

const ListaTareas = ({ tareas, onCompletar, onAgregarTarea, onBorrarTarea }) => {
    const [nuevaTarea, setNuevaTarea] = useState('');

    const handleAgregarTarea = () => {
        if (nuevaTarea.trim() !== '') {
            onAgregarTarea(nuevaTarea);
            setNuevaTarea('');
        }
    };

    return (
        <div className='table-container'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Accion</th>
                        <th>¿Borrar?</th>
                    </tr>
                </thead>
                <tbody>
                    {tareas.length === 0 ? (
                        <tr>
                            <td colSpan="5">No hay tareas todavía</td>
                        </tr>
                    ) : (
                        tareas.map((tarea) => (
                            <tr key={tarea.id}>
                                <td className={tarea.estado === 'Completada' ? 'tarea-completada' : ''}>
                                    {tarea.tarea}
                                </td>
                                <td>{tarea.fecha}</td>
                                <td>{tarea.estado}</td>
                                <td>
                                    <Button
                                        variant="success"
                                        onClick={() => onCompletar(tarea.id)}
                                        disabled={tarea.estado === 'Completada'}
                                    >
                                        Completar
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        variant=""
                                        onClick={() => onBorrarTarea(tarea.id)}
                                        className='boton-borrar'
                                    >
                                        <span className="bin-icon"></span>
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}

                    {onAgregarTarea && (
                        <tr>
                            <td>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese nueva tarea"
                                    value={nuevaTarea}
                                    onChange={(e) => setNuevaTarea(e.target.value)}
                                />
                            </td>
                            <td>{new Date().toLocaleDateString()}</td>
                            <td>Pendiente</td>
                            <td colSpan="2">
                                <Button variant="warning" onClick={handleAgregarTarea}>
                                    Agregar Tarea
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

ListaTareas.propTypes = {
    tareas: PropTypes.array.isRequired,
    onCompletar: PropTypes.func.isRequired,
    onAgregarTarea: PropTypes.func.isRequired,
    onBorrarTarea: PropTypes.func.isRequired,
};

export default ListaTareas;
