import React from 'react';

const Material = () => {
  // Ejemplo de datos de materiales de estudio para certámenes
  const materials = [
    { id: 1, exam: 'Certamen de Matemáticas', resources: ['Apuntes de Álgebra', 'Guía de ejercicios', 'Libro de referencia: Capítulo 5'] },
    { id: 2, exam: 'Certamen de Historia', resources: ['Resumen de la Revolución Francesa', 'Video: La Era de las Revoluciones', 'Cuestionario de práctica'] },
    { id: 3, exam: 'Certamen de Ciencias', resources: ['Laboratorio: Reacciones Químicas', 'Esquemas de Biología', 'Presentación de clase: Ecosistemas'] },
    { id: 4, exam: 'Certamen de Literatura', resources: ['Resumen: El Quijote', 'Ensayo comparativo', 'Libro de poemas: selección'] }
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', color: '#333', fontSize: '1em', marginBottom: '20px', marginTop: '40px' }}>
        <h1>Material de estudio</h1>
      </div>
      <div className="study-materials-container">

        <ul className="materials-list">
          {materials.map((material) => (
            <li key={material.id} className="material-item">
              <h3 className="material-exam">{material.exam}</h3>
              <ul className="resource-list">
                {material.resources.map((resource, index) => (
                  <li key={index} className="resource-item">{resource}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Material;
