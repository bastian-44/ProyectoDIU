import React from 'react';
import ExamDates from './ExamDates'; // Asegúrate de ajustar la ruta de importación

const Calendar = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', color: '#333', fontSize: '1em', marginBottom: '20px', marginTop: '40px' }}>
        <h1>Calendario de Evaluaciones</h1>
      </div>
      <ExamDates />
    </div>
  );
};

export default Calendar;
