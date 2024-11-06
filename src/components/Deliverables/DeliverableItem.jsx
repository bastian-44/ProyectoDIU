import React from 'react';

const DeliverableItem = ({ deliverable, onViewClick }) => {
  return (
    <li className="deliverable-item">
      <span className="deliverable-title">{deliverable.title}</span>
      <span className="deliverable-date">Fecha límite: {deliverable.dueDate}</span>
      <button onClick={() => onViewClick(deliverable)} className="view-button">
        Ver Entrega
      </button>
    </li>
  );
};

export default DeliverableItem;
