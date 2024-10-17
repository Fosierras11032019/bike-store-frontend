// Importa React y los hooks useEffect y useState
import React, { useEffect, useState } from 'react';

// Componente principal de la aplicación
function App() {
  // Definir el estado local para almacenar las bicicletas
  const [bikes, setBikes] = useState([]);

  // useEffect se ejecuta cuando el componente se monta, similar al ciclo de vida "componentDidMount" en clases
  useEffect(() => {
    // Solicitud al backend para obtener la lista de bicicletas
    fetch('https://bike-store-backend.onrender.com/api/bikes')
      .then((response) => response.json()) // Convertir la respuesta a JSON
      .then((data) => setBikes(data)); // Almacenar los datos de bicicletas en el estado
  }, []);

  // Renderiza la lista de bicicletas y muestra cada una con su nombre y precio
  return (
    <div className="App">
      <h1>Bike Store</h1>
      <ul>
        {bikes.map((bike) => (
          <li key={bike.id}>
            {bike.name} - ${bike.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exporta el componente para que pueda ser usado en otros archivos
export default App;