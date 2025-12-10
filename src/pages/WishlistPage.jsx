// src/pages/WishlistPage.jsx
import React from 'react'; // Eliminamos useState porque ya no lo necesitamos para la simulación
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js'; // Asegúrate de que este archivo tiene los datos correctos
import './WishlistPage.css';

const WishlistPage = () => {
  // Simulación: tomamos los 2 primeros productos para mostrarlos en la lista de deseos
  // Hacemos una comprobación de seguridad: si 'products' no existe o está vacío, usamos un array vacío.
  const wishlistItems = products ? products.slice(0, 2) : [];

  return (
    <div className="wishlist-page-container">
      <h1 className="wishlist-title">Tus Favoritos ❤️</h1>
      
      {/* Comprobamos si hay items antes de intentar mostrarlos */}
      {wishlistItems.length > 0 ? (
        <div className="wishlist-grid">
          {wishlistItems.map(item => (
            // Pasamos el prop como "product", que es lo que espera el componente ProductCard
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="empty-wishlist">
          <h2>Aún no has guardado ningún producto</h2>
          <div className="empty-heart">♡</div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;