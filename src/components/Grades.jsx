import React from 'react';

const Grades = () => {
  // Ejemplo de datos de calificaciones para cada evaluación
  const grades = [
    { id: 1, exam: 'Certamen de Matemáticas', grade: '8.5' },
    { id: 2, exam: 'Certamen de Historia', grade: '7.0' },
    { id: 3, exam: 'Certamen de Ciencias', grade: '9.2' },
    { id: 4, exam: 'Certamen de Literatura', grade: '6.8' }
  ];

  return (
    <div>
    <div style={{ textAlign: 'center', color: '#333', fontSize: '1em', marginBottom: '20px', marginTop: '40px' }}>
      <h1>Calificaciones</h1>
    </div>
  <div className="grades-container">

    <ul className="grades-list">
      {grades.map((grade) => (
        <li key={grade.id} className="grade-item">
            <span className="exam-name">{grade.exam}</span>
            <span className="exam-grade">{grade.grade}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Grades;
