import './Imagenes.css'
import CarruselPics from '../componentes/CarruselPics';

import placard from '../assets/placard.jpg';
import compu from '../assets/compu.jpg';
import juego from '../assets/juego.jpg';
import balcon from '../assets/balcon.jpg';
import bolsa from '../assets/bolsa.jpg';

const imagesData = [
    { src: placard, title: 'En el ropero', subtitle: 'escondiendome' },
    { src: compu, title: 'En la computadora', subtitle: 'aprendiendo a programar' },
    { src: juego, title: 'En el castillo', subtitle: 'durmiendo en las alturas' },
    { src: balcon, title: 'En el balcon', subtitle: 'tomando un poco de aire' },
    { src: bolsa, title: 'En una bolsa', subtitle: 'durmiendo en cualquier lado' },
  ];
  
  function Imagenes() {
    return (
      <div className="pictures-container">
        <CarruselPics images={imagesData} />
      </div>
    );
  }
  
  export default Imagenes;