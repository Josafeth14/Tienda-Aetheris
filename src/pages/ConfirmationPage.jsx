// src/pages/ConfirmationPage.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const location = useLocation();
  // Determinamos si es un éxito o un error basado en la URL
  const isSuccess = location.pathname.includes('success');

  const title = isSuccess ? '¡Felicidades!' : 'Error';
  const message = isSuccess 
    ? 'Tu pago se ha realizado.' 
    : 'No se pudo realizar el pago.';
  const suggestion = isSuccess
    ? 'Puedes seguir explorando nuestros productos.'
    : 'Por favor, intenta cambiar el método de pago.';

  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <div className={`confirmation-icon ${isSuccess ? 'success' : 'error'}`}>
          {isSuccess ? '✓' : '✗'}
        </div>
        <h2>{title}</h2>
        <p>{message}</p>
        <p className="suggestion">{suggestion}</p>
        <div className="confirmation-actions">
          {isSuccess ? (
            <Link to="/" className="confirmation-button primary">
              Volver al inicio
            </Link>
          ) : (
            <>
              <Link to="/cart" className="confirmation-button secondary">
                Volver al carrito
              </Link>
              <Link to="/payment-method" className="confirmation-button primary">
                Cambiar método de pago
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;