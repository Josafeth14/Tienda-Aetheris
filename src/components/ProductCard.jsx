// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import productImage from '../assets/vans-old-skool.png'; // ¡Necesitarás esta imagen en /assets!

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={productImage} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">
          Categoría &gt; <Link to="/category/calzado">{product.category}</Link>
        </p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <Link to={`/product/${product.id}`} className="details-button">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;