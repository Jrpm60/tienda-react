import React, { useState, useEffect } from 'react';

const ProductosList = ({ categoriaSelected, agregarAlCarrito }) => {
   const [products, setProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);
   const [selecDescripcion, setselecDescripcion] = useState('');
   const [ventDescripcion, setVentDescripcion] = useState(false);
   const [addedToCart, setAddedToCart] = useState({}); // Estado para el tick verde

   useEffect(() => {
      fetch('https://fakestoreapi.com/products')
         .then((res) => res.json())
         .then((data) => {
            setProducts(data);
            setFilteredProducts(data); // Inicialmente mostrar todos los productos
         })
         .catch((err) => console.error('Error al obtener datos:', err));
   }, []);

   useEffect(() => {
      if (categoriaSelected) {
         const filtered = products.filter(
            (product) => product.category === categoriaSelected
         );
         setFilteredProducts(filtered);
      } else {
         setFilteredProducts(products);
      }
   }, [categoriaSelected, products]);

   const handleAddToCart = (product) => {
      agregarAlCarrito(product);
      setAddedToCart((prevState) => ({
         ...prevState,
         [product.id]: true, // Marca el producto como añadido
      }));
      setTimeout(() => {
         setAddedToCart((prevState) => ({
            ...prevState,
            [product.id]: false, // Oculta el tick después de 2 segundos
         }));
      }, 2000);
   };

   const handleOpenModal = (description) => {
      setselecDescripcion(description);
      setVentDescripcion(true);
   };

   const handleCloseModal = () => {
      setVentDescripcion(false);
      setselecDescripcion('');
   };

   return (
      <>
         <div className="product-grid">
            {filteredProducts.map((product) => (
               <div className="product-card" key={product.id}>
                  <img
                     src={product.image}
                     alt={product.title}
                     className="product-image"
                  />
                  <h2>{product.title}</h2>
                  <p>
                     <b>Precio:</b> {product.price}€
                  </p>
                  <p>
                     <b>Categoria:</b> {product.category}
                  </p>
                  <p>
                     <b>Valoración:</b> {product.rating.rate}
                  </p>
                  <button
                     className="description-button"
                     onClick={() => handleOpenModal(product.description)}
                  >
                     Detalles
                  </button>
                  <button
                     className="add-to-carrito-button"
                     onClick={() => handleAddToCart(product)}
                  >
                     🛒 Añadir al carrito
                  </button>
                  {addedToCart[product.id] && (
                     <span className="tick-icon">Añadiendo al carrito ✔️</span>
                     )}
                  
               </div>
            ))}
         </div>

         {ventDescripcion && (
            <div className="modal">
               <div className="modal-content">
                  <span className="close-button" onClick={handleCloseModal}>
                     &times;
                  </span>
                  <p>{selecDescripcion}</p>
                  <button
                     className="modal-button"
                     onClick={handleCloseModal}
                  >
                     Volver a la Lista
                  </button>
               </div>
            </div>
         )}
      </>
   );
};

export default ProductosList;




