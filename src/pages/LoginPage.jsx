// src/pages/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css'; // Usaremos un CSS compartido para login y registro

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Inicio de sesión simulado!');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" placeholder="Gmail" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Contraseña" required />
          </div>
          <button type="submit" className="submit-btn">Entrar</button>
        </form>
        <p className="auth-switch">
          ¿No tienes cuenta? <Link to="/signup">Crea una cuenta</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;