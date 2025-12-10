// src/data/products.js

// --- ¡IMPORTAMOS LAS IMÁGENES AL PRINCIPIO! ---
import vansImage from '../assets/vans-old-skool.png';
import mochilaImage from '../assets/mochila-urbana.jpg';
// Importa más imágenes aquí a medida que las agregues

export const products = [
  {
    id: 1,
    name: 'Vans Old Skool Shoe',
    category: 'Calzado',
    price: 70.00,
    description: 'Las Vans Old Skool son un ícono...',
    sizes: [36, 38, 40, 42, 44],
    colors: ['#000000', '#D9534F', '#428BCA', '#FFFFFF'],
    image: vansImage // <-- USAMOS LA IMAGEN IMPORTADA
  },
  {
    id: 2,
    name: 'Mochila Urbana Gris', // <-- ¡AQUÍ ESTÁ TU PRODUCTO!
    category: 'Accesorio',
    price: 45.00,
    description: 'Una mochila versátil y moderna...',
    sizes: ['Única'],
    colors: ['#808080', '#333333'],
    image: mochilaImage // <-- ASIGNAMOS SU IMAGEN ESPECÍFICA
  },
  // ... más productos
];