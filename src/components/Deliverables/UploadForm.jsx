import React from 'react';

const UploadForm = ({ deliverable, onClose }) => {
  return (
    <div className="upload-form-container">
      <h3>{deliverable.title}</h3>
      <p>Fecha límite: {deliverable.dueDate}</p>
      <form>
        <label htmlFor="file-upload">Subir archivo:</label>
        <input type="file" id="file-upload" />
        <button type="submit">Subir</button>
      </form>
      <button onClick={onClose} className="back-button">
        Volver a la lista
      </button>
    </div>
  );
};

export default UploadForm;
