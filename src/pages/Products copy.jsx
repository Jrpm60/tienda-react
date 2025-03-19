import React, { useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error al obtener datos:', err));
  };

  const handleOpenModal = (description) => {
    setSelectedDescription(description);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDescription('');
  };

  return (
    <div>
      <h1 className="products-title">PRODUCTOS</h1>
      <button className="products-button" onClick={handleProducts}>
        Cargar Todos los Productos
      </button>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p><b>Precio:</b> {product.price}€</p>
            <p><b>Categoria:</b> {product.category}</p>
            <p><b>Valoración:</b> {product.rating.rate} ⭐</p>
            <p><b>Ventas:</b> {product.rating.count}</p>
            <button
              className="description-button"
              onClick={() => handleOpenModal(product.description)}
            >
              Detalles
            </button>
          </div>
        ))}
      </div>

      {/* Ventana Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <p>{selectedDescription}</p>
            <button className="modal-button" onClick={handleCloseModal}>
              Volver a la Lista
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;


