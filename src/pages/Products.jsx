import React, { useState } from 'react';
import SelectCategorias from "../components/SelectCategorias";
import ProductosList from "../components/ProductosList";

const Products = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  return (
    <div className='main'>
      <h1 className="products-title">PRODUCTOS</h1>
      <div className="buttons-container">
        <button 
          className="products-button" 
          onClick={() => setCategoriaSeleccionada("")} // Mostrar todos los productos
        >
          Cargar Todos los Productos
        </button>
        <SelectCategorias onCategoriaChange={setCategoriaSeleccionada} />
      </div>

      {/* Pasar la categoría seleccionada a ProductosList */}
      <ProductosList categoriaSelected={categoriaSeleccionada} />
    </div>
  );
};

export default Products;





