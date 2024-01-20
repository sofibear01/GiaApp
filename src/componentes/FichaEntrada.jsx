import { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './FichaEntrada.css';
import PropTypes from 'prop-types';


const FichaEntrada = ({ datosGata, onGuardar, onDatosActualizados }) => {
    const [nuevosDatos, setNuevosDatos] = useState(() => {
        const storedData = localStorage.getItem('datosGata');
        return storedData ? JSON.parse(storedData) : datosGata;
    });

    const handleGuardarClick = () => {
        onGuardar && onGuardar(nuevosDatos);
        localStorage.setItem('datosGata', JSON.stringify(nuevosDatos));
        onDatosActualizados && onDatosActualizados(nuevosDatos);
    };

    const handleInputChange = (e) => {
        setNuevosDatos({ ...nuevosDatos, [e.target.name]: e.target.value });
    };
    
    useEffect(() => {
        localStorage.setItem('datosGata', JSON.stringify(nuevosDatos));
    }, [nuevosDatos]);

    // const limpiarLocalStorage = () => {
    //     localStorage.removeItem('datosGata');
    // };  //esta la podria usar cuando se cierra sesion o algo asi

    return (
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            value={nuevosDatos.nombre}
                            onChange={handleInputChange}
                        />
                        <Form.Label>Meses:</Form.Label>
                        <Form.Control
                            type="number"
                            name="meses"
                            value={nuevosDatos.meses}
                            onChange={handleInputChange}
                        />
                        <Form.Label>Peso:</Form.Label>
                        <Form.Control
                            type="number"
                            name="peso"
                            value={nuevosDatos.peso}
                            onChange={handleInputChange}
                        />
                        <Form.Label>Nacimiento:</Form.Label>
                        <Form.Control
                            type="date"
                            name="nacimiento"
                            value={nuevosDatos.nacimiento}
                            onChange={handleInputChange}
                        />
                        <Form.Label>Género:</Form.Label>
                        <Form.Select
                            name="genero"
                            value={nuevosDatos.genero}
                            onChange={handleInputChange}
                        >
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </Form.Select>
                        <Form.Label>Telefono de emergencia:</Form.Label>
                        <Form.Control
                            type="number"
                            name="telefono"
                            value={nuevosDatos.telefono}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Button variant="primary" onClick={handleGuardarClick}>
                        Guardar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

FichaEntrada.propTypes = {
    datosGata: PropTypes.array.isRequired,
    onGuardar: PropTypes.func.isRequired,
    onDatosActualizados: PropTypes.func.isRequired,
};

export default FichaEntrada;
