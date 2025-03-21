import React, { useState } from 'react';
import SelectCategorias from "../components/SelectCategorias";
import ProductosList from "../components/ProductosList";


const Products = ({ agregarAlCarrito }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleAgregarAlCarrito = (producto) => {
    agregarAlCarrito(producto);
    setMensaje("Producto añadido al carrito correctamente");
    setTimeout(() => setMensaje(""), 3000);
  };

  return (
    <div className="main">
      <h1 className="products-title">PRODUCTOS</h1>
      <div className="buttons-container">
        <button
          className="products-button"
          onClick={() => setCategoriaSeleccionada("")}
        >
          Ver Todos
        </button>
        <SelectCategorias onCategoriaChange={setCategoriaSeleccionada} />
      </div>
      
      {/* Llamar a ProductosList con la categoría seleccionada */}
      <ProductosList 
        categoriaSelected={categoriaSeleccionada} 
        agregarAlCarrito={handleAgregarAlCarrito} 
      />

      {mensaje && <div className="floating-message">{mensaje}</div>}
    </div>
  );
};

export default Products;







