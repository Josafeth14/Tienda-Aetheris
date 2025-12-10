// src/pages/UserPanelPage.jsx
import React from 'react';
import UserSidebar from '../components/UserSidebar.jsx'; // <-- IMPORTAMOS
import './UserPanel.css';

const UserPanelPage = () => {
  return (
    <div className="user-panel-layout">
      <UserSidebar /> {/* <-- USAMOS EL COMPONENTE */}
      <main className="user-panel-content">
        <h2>¡Hola, Raul Corpus!</h2>
        <p>Aquí puedes editar tu información personal.</p>
        {/* Formulario de perfil */}
      </main>
    </div>
  );
};

export default UserPanelPage;