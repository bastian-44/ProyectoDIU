import React from 'react';

const CourseMain = () => {
  const summary = {
    grades: [
      { exam: 'Examen Parcial 1', grade: 85 },
      { exam: 'Examen Parcial 2', grade: 90 },
      { exam: 'Proyecto Final', grade: 95 },
    ],
    upcomingActivities: [
      { activity: 'Entrega Proyecto', date: '2024-11-20' },
      { activity: 'Examen Final', date: '2024-12-10' },
    ]
  };

  const averageGrade = summary.grades.reduce((total, grade) => total + grade.grade, 0) / summary.grades.length;

  return (
    <div className="course-main">
      <div style={{ textAlign: 'center', color: '#333', fontSize: '1.5em', marginBottom: '20px', marginTop: '40px' }}>
        <h1>Bienvenidos al Curso</h1>
        <p>Resumen y detalles importantes</p>
      </div>

      {/* Resumen de Calificaciones */}
      <div className="course-summary">
        <h2>Resumen de Calificaciones</h2>
        <ul>
          {summary.grades.map((item, index) => (
            <li key={index} style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>
              <strong>{item.exam}:</strong> {item.grade} puntos
            </li>
          ))}
        </ul>
        <p><strong>Promedio: </strong>{averageGrade.toFixed(2)} puntos</p>
      </div>

      {/* Actividades por Venir */}
      <div className="upcoming-activities">
        <h2>Próximas Actividades</h2>
        <ul>
          {summary.upcomingActivities.map((activity, index) => (
            <li key={index} style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>
              <strong>{activity.activity}:</strong> {activity.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseMain;
