// src/components/CategorySidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategorySidebar.css';

const CategorySidebar = ({ isOpen, onClose }) => {
  const categories = ['Novedades', 'Hombres', 'Mujeres', 'Niños', 'Accesorios', 'Calzado', 'Ofertas'];

  return (
    <div>
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}></div>
      <div className={`category-sidebar ${isOpen ? 'open' : ''}`}>
        <h2 className="sidebar-title">Categorías</h2>
        <nav>
          <ul>
            {categories.map(category => (
              <li key={category}>
                <NavLink to={`/category/${category.toLowerCase()}`} onClick={onClose}>
                  {category}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CategorySidebar;