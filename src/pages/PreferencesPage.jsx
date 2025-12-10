// src/pages/PreferencesPage.jsx
import React, { useState } from 'react';
import UserSidebar from '../components/UserSidebar.jsx';
import Modal from '../components/Modal.jsx';
import './UserPanel.css';

const PreferencesPage = () => {
  const [isStyleModalOpen, setStyleModalOpen] = useState(false);

  return (
    <div className="user-panel-layout">
      <UserSidebar />
      <main className="user-panel-content">
        <h2>¡Tus preferencias!</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button onClick={() => setStyleModalOpen(true)}>Editar Estilos favoritos</button>
        </div>
        <button style={{ marginTop: '2rem' }}>Guardar preferencias</button>
      </main>

      {/* --- MODAL ACTUALIZADO --- */}
      <Modal isOpen={isStyleModalOpen} onClose={() => setStyleModalOpen(false)} title="Selecciona tus estilos favoritos">
        <div>
          {/* Aquí iría el contenido real del modal, como los checkboxes */}
          <p>Elige los estilos que más te gustan para recibir recomendaciones personalizadas.</p>
        </div>
        
        {/* Usamos las nuevas clases de CSS para los botones */}
        <div className="modal-actions">
          <button className="modal-button" onClick={() => setStyleModalOpen(false)}>Cancelar</button>
          <button className="modal-button modal-button-primary">Guardar cambios</button>
        </div>
      </Modal>
    </div>
  );
};

export default PreferencesPage;