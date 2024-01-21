import { useState, useEffect } from 'react';

const CatInfo = () => {
  const [catData, setCatData] = useState(null);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
          headers: {
            'x-api-key': 'live_mDHTG8lFUAOnHeSGZ90lqZCGnRP7UE2h4eboh5Fl3HOdzbo1oiXz1hdb9dBAHFLd', 
          },
        });
        const data = await response.json();
        setCatData(data[0]);
      } catch (error) {
        console.error('Error fetching cat data:', error);
      }
    };
  
    fetchCatData();
  }, []);

  return (
    <div className='p-2'>
      <h2> Fotos y datos </h2>
      {catData && (
        <div>
          <img
            src={catData.url}
            alt="Cat"
            style={{ maxWidth: '100%', maxHeight: '400px' }}
          />
          <p>Raza: {catData.breeds.length > 0 ? catData.breeds[0].name : 'Desconocida'}</p>
          <p>Descripción: {catData.breeds.length > 0 ? catData.breeds[0].description : 'Sin descripción'}</p>
        </div>
      )}
    </div>
  );
};

export default CatInfo;