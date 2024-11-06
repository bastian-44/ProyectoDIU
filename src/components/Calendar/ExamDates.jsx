import React from 'react';

const ExamDates = () => {
  // Ejemplo de datos de evaluaciones
  const exams = [
    { id: 1, title: 'Examen de Matemáticas', date: '2024-11-10' },
    { id: 2, title: 'Examen de Historia', date: '2024-11-15' },
    { id: 3, title: 'Examen de Ciencias', date: '2024-11-20' },
    { id: 4, title: 'Examen de Literatura', date: '2024-11-25' },
    { id: 5, title: 'Proyecto Final', date: '2024-12-05' },
    { id: 6, title: 'Examen Final', date: '2024-12-20' },
  ];

  return (
    <div className="exam-dates-container">
      <ul className="exam-list">
        {exams.map((exam) => (
          <li key={exam.id} className="exam-item">
            <span className="exam-title">{exam.title}</span>
            <span className="exam-date">{exam.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamDates;
