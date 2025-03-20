import React, { useState, useEffect } from 'react';

const Titulo = ({ agregarAlCarrito }) => {
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
                    <li key={producto.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <img src={producto.image} alt={producto.title} style={{ width: '50px', height: '50px' }} />
                        {producto.title} - ${producto.price}
                        <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Titulo;
