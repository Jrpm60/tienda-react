import React, { useState, useEffect } from 'react';

const Titulo = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                const productosOrdenados = data.sort((a, b) => a.title.localeCompare(b.title));
                setProductos(productosOrdenados);
            })
            .catch(error => console.error("Error al cargar productos:", error));
    }, []);

    return (
        <div>
            <h1>Lista de Productos por Título</h1>
            <ul>
                {productos.map(producto => (
                    <li key={producto.id}>
                        {producto.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Titulo;
