// src/pages/CartPage.jsx
import React from 'react';
import CartItem from '../components/CartItem.jsx';
import { products } from '../data/products.js'; // Asegúrate de que este archivo tiene los datos correctos
import './CartPage.css';

const CartPage = () => {
  // Simulación: tomamos el primer producto para mostrarlo en el carrito
  // Hacemos la misma comprobación de seguridad que en la Wishlist
  const cartItems = products ? products.slice(0, 1) : [];
  
  // Calculamos los totales solo si hay items en el carrito
  const subtotal = cartItems.length > 0 ? cartItems.reduce((sum, item) => sum + item.price, 0) : 0;
  const discount = cartItems.length > 0 ? 14.00 : 0; // Solo hay descuento si hay productos
  const total = subtotal - discount;

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Carrito de compras</h1>
      <div className="cart-layout">
        <div className="cart-items-list">
          {/* Comprobamos si hay items antes de mostrarlos */}
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))
          ) : (
            <p>Tu carrito está vacío.</p> // Mensaje si no hay nada
          )}
        </div>
        <div className="order-summary">
          <h2 className="summary-title">Resumen del pedido</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Descuento</span>
            <span className="discount">-${discount.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Envío</span>
            <span>Gratis</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Agregar método de pago</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;