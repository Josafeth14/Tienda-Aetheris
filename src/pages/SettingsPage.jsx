// src/pages/SettingsPage.jsx
import React from 'react';
import UserSidebar from '../components/UserSidebar.jsx'; // <-- IMPORTAMOS
import './UserPanel.css';

const SettingsPage = () => {
  return (
    <div className="user-panel-layout">
      <UserSidebar /> {/* <-- USAMOS EL COMPONENTE */}
      <main className="user-panel-content">
        <h2>Ajustes</h2>
        <p>Configura las opciones de tu cuenta.</p>
      </main>
    </div>
  );
};

export default SettingsPage;