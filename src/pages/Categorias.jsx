import React, { useState, useEffect } from 'react';

const Categorias = ({ agregarAlCarrito }) => {
    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategorias(data))
            .catch(error => console.error("Error al cargar categorías:", error));
    }, []);

    const cargarProductos = (categoria) => {
        setCategoriaSeleccionada(categoria); // Guarda la categoría actual
        fetch(`https://fakestoreapi.com/products/category/${categoria}`)
            .then(res => res.json())
            .then(data => setProductos(data))
            .catch(error => console.error("Error al cargar productos:", error));
    };

    const mostrarDetalles = (producto) => {
        setProductoSeleccionado(producto);
    };

    const cerrarDetalles = () => {
        setProductoSeleccionado(null);
    };

    return (
        <div>
            <h1>Categorías de Productos</h1>
            <ul>
                {categorias.map((categoria, index) => (
                    <li key={index} onClick={() => cargarProductos(categoria)} style={{ cursor: 'pointer', color: 'blue' }}>
                        {categoria}
                    </li>
                ))}
            </ul>

            {categoriaSeleccionada && (
                <div>
                    <h2>Productos en {categoriaSeleccionada}</h2>
                    <ul>
                        {productos.map(producto => (
                            <li key={producto.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <img 
                                    src={producto.image} 
                                    alt={producto.title} 
                                    style={{ width: '50px', height: '50px', cursor: 'pointer' }} 
                                    onClick={() => mostrarDetalles(producto)} 
                                />
                                <div onClick={() => mostrarDetalles(producto)} style={{ cursor: 'pointer' }}>
                                    <strong>{producto.title}</strong> - ${producto.price}
                                </div>
                                <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {productoSeleccionado && (
                <div style={{
                    position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.3)'
                }}>
                    <h2>{productoSeleccionado.title}</h2>
                    <img src={productoSeleccionado.image} alt={productoSeleccionado.title} style={{ width: '150px' }} />
                    <p><strong>Descripción:</strong> {productoSeleccionado.description}</p>
                    <p><strong>Precio:</strong> ${productoSeleccionado.price}</p>
                    <p><strong>Categoría:</strong> {productoSeleccionado.category}</p>
                    <p><strong>Valoración:</strong> {productoSeleccionado.rating.rate} ⭐ ({productoSeleccionado.rating.count} valoraciones)</p>
                    <button onClick={cerrarDetalles}>Cerrar</button>
                </div>
            )}
        </div>
    );
};

export default Categorias;



