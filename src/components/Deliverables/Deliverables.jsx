import React, { useState } from 'react';
import DeliverableItem from './DeliverableItem';
import UploadForm from './UploadForm';


const Deliverables = () => {
  const [selectedDeliverable, setSelectedDeliverable] = useState(null);

  // Ejemplo de datos de entregas
  const deliverables = [
    { id: 1, title: 'Entrega 1: Proyecto de Matemáticas', dueDate: '2024-11-10' },
    { id: 2, title: 'Entrega 2: Ensayo de Historia', dueDate: '2024-11-20' },
    { id: 3, title: 'Entrega 3: Informe de Ciencias', dueDate: '2024-11-30' },
  ];

  const handleViewClick = (deliverable) => {
    setSelectedDeliverable(deliverable);
  };

  return (


    <div>
      <div style={{ textAlign: 'center', color: '#333', fontSize: '1em', marginBottom :'20px', marginTop: '40px' }}>
        <h1>Entregas</h1>
      </div>
      <div className="deliverables-container">

        <ul className="deliverables-list">
          {deliverables.map((deliverable) => (
            <DeliverableItem
              key={deliverable.id}
              deliverable={deliverable}
              onViewClick={handleViewClick}
            />
          ))}
        </ul>

        {selectedDeliverable && (
          <UploadForm deliverable={selectedDeliverable} onClose={() => setSelectedDeliverable(null)} />
        )}
      </div>
    </div>
  );
};

export default Deliverables;
