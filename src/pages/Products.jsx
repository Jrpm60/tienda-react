import React, { useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [selecDescripcion, setselecDescripcion] = useState('');
  const [ventDescripcion, setVentDescripcion] = useState(false);
  const [mostrarCarrito, setMostrarCarrito] = useState(false); // Controlar visibilidad del carrito

  const handleProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error al obtener datos:', err));
  };

  const handleAddTocarrito = (product) => {
    setCarrito((prevcarrito) => [...prevcarrito, product]);
    alert(`${product.title} ha sido añadido a la cesta.`);
  };

  const handleOpenModal = (description) => {
    setselecDescripcion(description);
    setVentDescripcion(true);
  };

  const handleCloseModal = () => {
    setVentDescripcion(false);
    setselecDescripcion('');
  };

  const toggleMostrarCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  return (
    <div className='main'>
      <h1 className="products-title">PRODUCTOS</h1>
      <div className="buttons-container">
        <button className="products-button" onClick={handleProducts}>
          Cargar Todos los Productos
        </button>
        <button className="cart-button" onClick={toggleMostrarCarrito}>
          {mostrarCarrito ? 'Ocultar Carrito' : 'Mostrar Carrito'}
        </button>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p><b>Precio:</b> {product.price}€</p>
            <p><b>Categoria:</b> {product.category}</p>
            <p><b>Valoración:</b> {product.rating.rate} </p>
            <button
              className="description-button"
              onClick={() => handleOpenModal(product.description)}
            >
              Detalles
            </button>
            <button
              className="add-to-carrito-button"
              onClick={() => handleAddTocarrito(product)}
            >
              🛒
            </button>
          </div>
        ))}
      </div>

      {/* Ventana Modal */}
      {ventDescripcion && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <p>{selecDescripcion}</p>
            <button className="modal-button" onClick={handleCloseModal}>
              Volver a la Lista
            </button>
          </div>
        </div>
      )}

      {/* Mostrar u Ocultar Carrito */}
      {mostrarCarrito && (
        <div className="carrito">
          <h2>Cesta de Compras</h2>
          {carrito.length > 0 ? (
            <ul>
              {carrito.map((item, index) => (
                <li key={index}>
                  {item.title} - {item.price}€
                </li>
              ))}
            </ul>
          ) : (
            <p>Tu cesta está vacía.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;




