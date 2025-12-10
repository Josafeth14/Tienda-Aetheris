// src/pages/LogoutPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal.jsx';
import './LogoutPage.css';

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Sesión cerrada (simulado)');
    navigate('/'); // Redirige al inicio después de cerrar sesión
  };

  const handleCancel = () => {
    navigate(-1); // Vuelve a la página anterior
  };

  return (
    <Modal isOpen={true} onClose={handleCancel} title="">
      <div className="logout-modal-content">
        <div className="warning-icon">⚠️</div>
        <h2>¿Estás seguro de querer cerrar sesión?</h2>
        <p>Tu sesión se cerrará y volverás a la página principal.</p>
        <div className="modal-actions">
          <button className="modal-button" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="modal-button modal-button-danger" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutPage;