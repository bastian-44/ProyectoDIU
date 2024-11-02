import React from 'react';
import Acordeon from '../components/Acordeon';

function HomePage() {
  return (
    <div>
      <h1>Preguntas Frecuentes</h1>

      <Acordeon title="Foro">
        <p>a</p>
      </Acordeon>

      <Acordeon title="Fechas">
        <p>React se usa componiendo componentes, que representan diferentes partes de la interfaz de usuario.</p>
      </Acordeon>

      <Acordeon title="Entregas">
        <p>React es popular por su facilidad para crear aplicaciones dinámicas y su eficiente renderizado.</p>
      </Acordeon>

      <Acordeon title="Notas">
        <p>React es popular por su facilidad para crear aplicaciones dinámicas y su eficiente renderizado.</p>
      </Acordeon>

      <Acordeon title="Material">
        <p>React es popular por su facilidad para crear aplicaciones dinámicas y su eficiente renderizado.</p>
      </Acordeon>
    </div>
  );
}

export default HomePage;