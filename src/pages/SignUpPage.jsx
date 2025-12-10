// src/pages/SignUpPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css'; // Reutilizamos el mismo CSS del Login

const SignUpPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cuenta creada (simulado)!');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Nombre completo" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Gmail" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Contraseña" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirmar contraseña" required />
          </div>
          <button type="submit" className="submit-btn">Entrar</button>
        </form>
        <p className="auth-switch">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;