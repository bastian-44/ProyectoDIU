import React, { useState } from 'react';

const DeliverableItem = ({ deliverable, onViewClick }) => {
  const [isFileViewed, setIsFileViewed] = useState(false);

  const handleViewFile = () => {
    setIsFileViewed(true);
  };

  return (
    <li className="deliverable-item">
      <span className="deliverable-title">{deliverable.title}</span>
      <span className="deliverable-date">Fecha límite: {deliverable.dueDate}</span>
      <span className={`deliverable-status ${deliverable.status === 'Entregada' ? 'delivered' : 'pending'}`}>
        {deliverable.status}
      </span>
      {deliverable.feedback && (
        <span className="deliverable-feedback">Retroalimentación: {deliverable.feedback}</span>
      )}

      {/* Mostrar el archivo si está entregada */}
      {deliverable.status === 'Entregada' && deliverable.uploadedFile ? (
        <div>
          {!isFileViewed ? (
            <button onClick={handleViewFile} className="view-button">
              Ver Archivo Subido
            </button>
          ) : (
            <div className="file-preview">
              <span>Archivo visualizado: {deliverable.uploadedFile}</span>
              <p>Contenido simulado del archivo: (mostrar vista previa o detalles aquí)</p>
            </div>
          )}
        </div>
      ) : (
        <button onClick={() => onViewClick(deliverable)} className="view-button">
          {deliverable.status === 'Entregada' ? 'Ver Retroalimentación' : 'Subir Archivo'}
        </button>
      )}
    </li>
  );
};

export default DeliverableItem;
