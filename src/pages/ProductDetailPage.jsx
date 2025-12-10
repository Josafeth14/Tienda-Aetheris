// src/pages/ProductDetailPage.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products.js';
import './ProductDetailPage.css';
import productImage from '../assets/vans-old-skool.png'; // Usaremos una imagen de ejemplo

const ProductDetailPage = () => {
  const { productId } = useParams(); // Obtiene el ID de la URL
  const product = products.find(p => p.id === parseInt(productId));
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Si no se encuentra el producto, muestra un mensaje
  if (!product) {
    return <div className="product-not-found">Producto no encontrado.</div>;
  }

  return (
    <div className="detail-page-container">
      <p className="breadcrumbs">
        <Link to="/">Inicio</Link> &gt; <Link to={`/category/${product.category.toLowerCase()}`}>{product.category}</Link> &gt; {product.name}
      </p>

      <div className="product-detail-layout">
        <div className="product-gallery">
          <img src={productImage} alt={product.name} className="main-product-image" />
          {/* Aquí irían las miniaturas si las tuviéramos */}
        </div>

        <div className="product-info-details">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <p className="product-detail-description">{product.description}</p>

          <div className="selectors-container">
            <div className="size-selector">
              <h3 className="selector-title">Talla</h3>
              <div className="options">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    className={`option-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="color-selector">
              <h3 className="selector-title">Color</h3>
              <div className="options">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    className={`color-option-btn ${selectedColor === color ? 'selected' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-btn">Agregar al carrito</button>
            <button className="buy-now-btn">Comprar ahora</button>
            <button className="wishlist-detail-btn">♡</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;