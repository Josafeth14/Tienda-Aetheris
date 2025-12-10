// src/pages/UserPanelPage.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserPanel.css';

const UserPanelPage = () => {
  return (
    <div className="user-panel-layout">
      <aside className="user-sidebar">
        <div className="user-profile-summary">
          <div className="user-avatar"></div>
          <h3>Hola, Raul Corpus</h3>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><NavLink to="/profile">Perfil</NavLink></li>
            <li><NavLink to="/cart">Carrito</NavLink></li>
            <li><NavLink to="/preferences">Preferencias</NavLink></li>
            <li><NavLink to="/settings">Ajustes</NavLink></li>
            <li><NavLink to="/sell">Vender</NavLink></li>
            <li><NavLink to="/logout">Cerrar sesión</NavLink></li>
          </ul>
        </nav>
      </aside>
      <main className="user-panel-content">
        <h2>¡Hola, Raul Corpus!</h2>
        <p>Aquí puedes editar tu información personal.</p>
        {/* Formulario de perfil */}
      </main>
    </div>
  );
};

export default UserPanelPage;