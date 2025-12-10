// src/pages/HomePage.jsx

import React, { useState } from 'react';
import './HomePage.css';
import bannerImage from '../assets/banner-image.png';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';

const HomePage = () => {
  // 1. EL CAMBIO CLAVE: Inicializamos el estado en `null` (nada seleccionado)
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['Lo mas vendido', 'Accesorio', 'Mujer', 'Calzado', 'Hombre'];

  // 2. UNA FUNCIÓN MEJORADA PARA MANEJAR EL CLIC
  const handleCategoryClick = (category) => {
    // Si la categoría que se clickea es la que ya está seleccionada...
    if (selectedCategory === category) {
      // ...la deseleccionamos (poniendo el estado de nuevo en null).
      setSelectedCategory(null);
    } else {
      // Si no, seleccionamos la nueva categoría.
      setSelectedCategory(category);
    }
  };

  return (
    <div className="home-page">
      {/* --- El banner se queda como está --- */}
      <div className="promo-banner">
        <div className="banner-text">
          <h2 className="banner-title">¡URBANO AL MÁXIMO!</h2>
          <p className="banner-legend">
            Calzado y prendas para dominar la calle. Saca a relucir tu estilo con nuestras ofertas
          </p>
          <button className="banner-button">Ver colección Urbana</button>
        </div>
        <div className="banner-image-container">
          <img src={bannerImage} alt="Colección Urbana" className="banner-image" />
        </div>
      </div>

      <h2 className="section-title">Categorías</h2>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            // 3. Usamos la nueva función en el onClick
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* --- La cuadrícula de productos se queda como está --- */}
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;