// Ficha.jsx (Mostrar Datos):

import { Card, Button } from 'react-bootstrap';
import ella from '../assets/ella.jpg';
import './Ficha.css';
import PropTypes from 'prop-types';



const Ficha = ({ datosGata, onEditar }) => {
    const handleEditarClick = () => {
        onEditar && onEditar();
    };

    return (
        <Card id='card-principal'>
            <Card.Body>
                <div className="encabezado">
                    <img src={ella} alt="Foto de la gata" className="imagen-chica" />
                    <div className="titulo-container">
                        <Card.Title>Datos de mi mascota</Card.Title>
                    </div>
                </div>

                {Object.values(datosGata).some((value) => value !== '') ? (
                    <div>
                        <Card.Text><strong>Nombre: {datosGata.nombre}</strong></Card.Text>
                        <Card.Text><strong>Meses: {datosGata.meses}</strong></Card.Text>
                        <Card.Text><strong>Peso: {datosGata.peso}</strong></Card.Text>
                        <Card.Text><strong>Nacimiento: {datosGata.nacimiento}</strong></Card.Text>
                        <Card.Text><strong>Genero: {datosGata.genero}</strong></Card.Text>
                        <Card.Text><strong>Telefono de emergencia: {datosGata.telefono}</strong></Card.Text>

                        <Button variant="info" onClick={handleEditarClick}>
                            Editar
                        </Button>
                    </div>
                ) : (
                    <div>
                        <p>No hay datos cargados aún.</p>
                        <Button variant="primary" onClick={onEditar}>
                            Agregar Datos
                        </Button>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

Ficha.propTypes = {
    datosGata: PropTypes.array.isRequired,
    onEditar: PropTypes.func.isRequired,
};

export default Ficha;
