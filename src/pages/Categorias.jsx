import React, { useState, useEffect } from 'react';

const Categorias = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategorias(data))
            .catch(error => console.error("Error al cargar categorías:", error));
    }, []);

    return (
        <div>
            <h1>Categorías de Productos</h1>
            <ul>
                {categorias.map((categoria, index) => (
                    <li key={index}>{categoria}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categorias;
