// src/components/CartItem.jsx
import React from 'react';
import './CartItem.css';
import productImage from '../assets/vans-old-skool.png'; // Imagen de ejemplo

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={productImage} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-category">{item.category}</p>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-selector">
          <button>-</button>
          <input type="number" value="1" readOnly />
          <button>+</button>
        </div>
        <button className="delete-item-btn">🗑️</button>
      </div>
    </div>
  );
};

export default CartItem;