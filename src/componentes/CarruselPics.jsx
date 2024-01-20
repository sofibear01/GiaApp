import Carousel from 'react-bootstrap/Carousel';

function CarruselPics({ images }) {
    return (
      <Carousel style={{ maxWidth: '600px', margin: 'auto' }}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={`Slide ${index + 1}`}
              style={{ maxHeight: '550px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>{image.title}</h3>
              <p>{image.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  
  export default CarruselPics;
