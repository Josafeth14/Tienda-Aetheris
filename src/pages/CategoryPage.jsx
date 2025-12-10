// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';

const CategoryPage = () => {
  const { categoryName } = useParams(); // Obtiene el nombre de la categoría de la URL

  return (
    <div className="category-page-container">
      <h1 className="category-title">
        Categoría: <span>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</span>
      </h1>
      <p>Aquí se mostrarán todos los productos de la categoría seleccionada.</p>
      {/* Aquí iría una cuadrícula de productos filtrados */}
    </div>
  );
};

export default CategoryPage;