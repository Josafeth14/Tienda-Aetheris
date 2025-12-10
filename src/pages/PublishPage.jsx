// src/pages/PublishPage.jsx

import React from 'react'; // <-- ESTA LÍNEA ES LA MAGIA. ERA LA QUE FALTABA.
import './PublishPage.css';

const PublishPage = ({ isEditing = false }) => {
  const pageTitle = isEditing ? 'Editar producto' : 'Publicar producto';

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar
    alert(isEditing ? 'Producto actualizado (simulado)' : 'Producto publicado (simulado)');
  };

  return (
    <div className="publish-page-container">
      <div className="publish-layout">
        {/* Usamos la etiqueta <form> para que el botón funcione */}
        <form className="publish-form" onSubmit={handleSubmit}>
          <h2>{pageTitle}</h2>
          
          <div className="form-group">
            <label htmlFor="image-url">URL de imagen</label>
            <input type="text" id="image-url" placeholder="https://ejemplo.com/imagen.png" required />
          </div>

          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input type="text" id="title" placeholder="Ej: Vans Old Skool Shoe" required />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea id="description" rows="4" placeholder="Describe tu producto..."></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="price">Precio</label>
            <input type="number" id="price" placeholder="70.00" step="0.01" required />
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoría</label>
            <select id="category">
              <option>Calzado</option>
              <option>Accesorio</option>
              <option>Mujer</option>
              <option>Hombre</option>
            </select>
          </div>
          
          <button type="submit" className="publish-button">
            {isEditing ? 'Guardar cambios' : 'Publicar producto'}
          </button>
        </form>

        <div className="publish-preview">
          <h3>Vista previa</h3>
          <div className="preview-card">
            <p>La vista previa aparecerá aquí.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishPage;