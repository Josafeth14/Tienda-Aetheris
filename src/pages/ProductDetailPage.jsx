// src/pages/ProductDetailPage.jsx
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products.js';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { productId } = useParams();
  // Buscamos el producto. Si no lo encuentra, 'product' será 'undefined'.
  const product = products.find(p => p.id === parseInt(productId));
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  
  const navigate = useNavigate();

  const handleAddToCart = () => {
    alert('Producto añadido al carrito (simulado)');
    navigate('/cart');
  };

  const handleBuyNow = () => {
    alert('Procediendo a la compra (simulado)');
    navigate('/cart');
  };

  // --- COMPROBACIÓN DE SEGURIDAD ---
  // Si después de buscar, 'product' sigue siendo 'undefined', mostramos un error y detenemos la ejecución.
  if (!product) {
    return (
      <div className="product-not-found">
        <h1>404</h1>
        <p>El producto que buscas no existe.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  // Si llegamos aquí, significa que 'product' SÍ existe.
  return (
    <div className="detail-page-container">
      <p className="breadcrumbs">
        <Link to="/">Inicio</Link> &gt; <Link to={`/category/${product.category.toLowerCase()}`}>{product.category}</Link> &gt; {product.name}
      </p>

      <div className="product-detail-layout">
        <div className="product-gallery">
          <img src={product.image} alt={product.name} className="main-product-image" />
        </div>

        <div className="product-info-details">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <p className="product-detail-description">{product.description}</p>

          <div className="selectors-container">
            {/* Solo mostramos la sección de tallas si el producto TIENE tallas */}
            {product.sizes && product.sizes.length > 0 && (
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
            )}

            {/* Solo mostramos la sección de colores si el producto TIENE colores */}
            {product.colors && product.colors.length > 0 && (
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
            )}
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
            <button className="buy-now-btn" onClick={handleBuyNow}>
              Comprar ahora
            </button>
            <button className="wishlist-detail-btn">♡</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;