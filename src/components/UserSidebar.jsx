// src/components/UserSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

// ¡IMPORTANTE! Importamos el CSS del panel aquí, porque este componente lo necesita.
import '../pages/UserPanel.css'; 

const UserSidebar = () => {
  return (
    <aside className="user-sidebar">
      <div className="user-profile-summary">
        <div className="user-avatar"></div>
        <h3>Hola, Raul Corpus</h3>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {/* Usamos 'end' para que la ruta de Perfil no se quede activa en las demás */}
          <li><NavLink to="/profile" end>Perfil</NavLink></li>
          <li><NavLink to="/cart">Carrito</NavLink></li>
          <li><NavLink to="/preferences">Preferencias</NavLink></li>
          <li><NavLink to="/settings">Ajustes</NavLink></li>
          <li><NavLink to="/sell">Vender</NavLink></li>
          <li><NavLink to="/logout">Cerrar sesión</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default UserSidebar;