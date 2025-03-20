import React from 'react';

const SelectCategorias = ({ onCategoriaChange }) => {
  const categorias = ["jewelery", "electronics", "men's clothing", "women's clothing"]; 

  const handleChange = (event) => {
    onCategoriaChange(event.target.value); // Pasar la categoría seleccionada al padre
  };

  return (
    <div>
      <select name="categorias" id="categorias" onChange={handleChange}>
        <option value="">--- Elige una opción ---</option>
        {categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategorias;

