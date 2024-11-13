import React, { useState } from 'react';
import DeliverableItem from './DeliverableItem';
import UploadForm from './UploadForm';

const Deliverables = () => {
  const [selectedDeliverable, setSelectedDeliverable] = useState(null);

  // Ejemplo de datos de entregas con estado, retroalimentación y archivo subido (opcional)
  const deliverables = [
    {
      id: 1,
      title: 'Entrega 1: Proyecto de Matemáticas',
      dueDate: '2024-11-10',
      status: 'Entregada',
      feedback: 'Revisar los cálculos en la segunda parte.',
      uploadedFile: 'proyecto_matematicas.pdf' // Nombre del archivo subido
    },
    {
      id: 2,
      title: 'Entrega 2: Ensayo de Historia',
      dueDate: '2024-11-20',
      status: 'Pendiente',
      feedback: null,
      uploadedFile: null
    },
    {
      id: 3,
      title: 'Entrega 3: Informe de Ciencias',
      dueDate: '2024-11-30',
      status: 'Pendiente',
      feedback: null,
      uploadedFile: null
    },
  ];

  const handleViewClick = (deliverable) => {
    setSelectedDeliverable(deliverable);
  };

  return (
    <div className="deliverables-wrapper">
      <div className="deliverables-header">
        <h1>Entregas</h1>
      </div>
      <div className="deliverables-content">
        <ul className="deliverables-list">
          {deliverables.map((deliverable) => (
            <DeliverableItem
              key={deliverable.id}
              deliverable={deliverable}
              onViewClick={handleViewClick}
            />
          ))}
        </ul>

        {selectedDeliverable && selectedDeliverable.status === 'Pendiente' && (
          <div className="upload-section">
            <UploadForm deliverable={selectedDeliverable} onClose={() => setSelectedDeliverable(null)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Deliverables;
