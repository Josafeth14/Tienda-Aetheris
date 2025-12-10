// src/pages/HomePage.jsx
import React, { useState } from 'react'; // <-- LÍNEA CORREGIDA
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import bannerImage from '../assets/banner-image.png'; 
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const categories = ['Lo mas vendido', 'Accesorio', 'Mujer', 'Calzado', 'Hombre'];

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    navigate(`/category/${category.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="home-page">
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
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="product-grid">
        {products && products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;