// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Logo.png';

const HamburgerIcon = () => <div className="icon-text">☰</div>;
const SearchIcon = () => <div className="icon-text search-icon">⚲</div>;
const HeartIcon = () => <div className="icon-text heart-icon">♡</div>;
const UserIcon = () => <div className="icon-text user-icon">👤</div>;
const ChatIcon = () => <div className="icon-text chat-icon">💬</div>;

const Header = ({ onMenuClick }) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="header-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Aetheris Logo" className="logo-img" />
        </Link>
        <h1 className="logo-text">Aetheris</h1>
        <button className="header-button hamburger-button" onClick={onMenuClick}>
          <HamburgerIcon />
        </button>
      </div>
      
      <div className="header-center">
        <div className="search-bar">
          <input type="text" placeholder="Hinted search text" />
          <button className="search-button-inner"><SearchIcon /></button>
        </div>
      </div>

      <div className="header-right">
        {/* Usamos <Link> en lugar de <button> para la navegación */}
        <Link to="/chat" className="header-button chat-button"><ChatIcon /></Link>
        <Link to="/wishlist" className="header-button wishlist-button"><HeartIcon /></Link>
        
        <div className="user-menu-container">
          <button className="header-button user-button" onClick={() => setUserMenuOpen(!isUserMenuOpen)}>
            <UserIcon />
          </button>
          {isUserMenuOpen && (
            <div className="user-dropdown-menu">
              <Link to="/profile" className="dropdown-item" onClick={() => setUserMenuOpen(false)}>Perfil</Link>
              <Link to="/cart" className="dropdown-item" onClick={() => setUserMenuOpen(false)}>Carrito</Link>
              <Link to="/preferences" className="dropdown-item" onClick={() => setUserMenuOpen(false)}>Preferencias</Link>
              <Link to="/settings" className="dropdown-item" onClick={() => setUserMenuOpen(false)}>Ajustes</Link>
              <Link to="/sell" className="dropdown-item" onClick={() => setUserMenuOpen(false)}>Vender</Link>
              <div className="dropdown-divider"></div>
              <Link to="/logout" className="dropdown-item logout-item" onClick={() => setUserMenuOpen(false)}>Cerrar sesión</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;