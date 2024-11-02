import React, { useState } from 'react';

function Acordeon({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAcordeon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="acordeon">
      <h2 onClick={toggleAcordeon} className="acordeon-titulo">
        {title}
      </h2>
      {isOpen && (
        <div className="acordeon-contenido">
          {children}
        </div>
      )}
    </div>
  );
}

export default Acordeon;
