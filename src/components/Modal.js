import React, { useState } from 'react';
import './Modal.css';  

const Modal = ({ isOpen, onClose, onConfirm, onNameChange, name, taskCompleted }) => {
  const [error, setError] = useState('');

  const handleConfirm = () => {
    if (!name) {
      setError('O nome é obrigatório!');
      return;
    }
    setError('');
    onConfirm();
  };

  const handleNameChange = (e) => {
    onNameChange(e.target.value);
    setError(''); 
  };

  return (
    isOpen ? (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Confirmar Conclusão</h2>
          <p>Digite seu nome para confirmar a conclusão:</p>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Seu nome"
          />
          <div className='buttons'>
              {error && <p className="error-message">{error}</p>}
              <button onClick={handleConfirm}>Confirmar</button>
              <button className='remove-btn' onClick={onClose}>Cancelar</button>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default Modal;
