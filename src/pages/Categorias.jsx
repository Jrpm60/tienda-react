import React, { useState, useEffect } from 'react';

const Categorias = ({ agregarAlCarrito }) => {
    // Estados que gestionan las categorías, productos, la categoría seleccionada y el producto seleccionado.
    const [categorias, setCategorias] = useState([]); // Guarda las categorías de productos.
    const [productos, setProductos] = useState([]); // Guarda los productos de una categoría seleccionada.
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null); // Guarda la categoría actualmente seleccionada.
    const [productoSeleccionado, setProductoSeleccionado] = useState(null); // Guarda el producto seleccionado para mostrar detalles.

    // useEffect para cargar las categorías desde la API cuando el componente se monte.
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories') // Llamada a la API para obtener las categorías de productos.
            .then(res => res.json()) // Convertir la respuesta en JSON.
            .then(data => setCategorias(data)) // Guardar las categorías en el estado `categorias`.
            .catch(error => console.error("Error al cargar categorías:", error)); // Manejo de errores.
    }, []); // El array vacío `[]` hace que este efecto se ejecute solo una vez cuando el componente se monte.

    // Función para cargar los productos de una categoría seleccionada.
    const cargarProductos = (categoria) => {
        setCategoriaSeleccionada(categoria); // Establece la categoría seleccionada en el estado.
        fetch(`https://fakestoreapi.com/products/category/${categoria}`) // Llamada a la API para obtener los productos de la categoría seleccionada.
            .then(res => res.json()) // Convertir la respuesta en JSON.
            .then(data => setProductos(data)) // Guardar los productos en el estado `productos`.
            .catch(error => console.error("Error al cargar productos:", error)); // Manejo de errores.
    };

    // Función para mostrar los detalles de un producto.
    const mostrarDetalles = (producto) => {
        setProductoSeleccionado(producto); // Establece el producto seleccionado para mostrar sus detalles.
    };

    // Función para cerrar el detalle del producto.
    const cerrarDetalles = () => {
        setProductoSeleccionado(null); // Restablece el estado de producto seleccionado a `null` para cerrar el detalle.
    };

    return (
        <div>
            <h1>Categorías de Productos</h1>
            
            {/* Lista de categorías que se muestran cuando se cargan desde la API */}
            <ul>
                {categorias.map((categoria, index) => (
                    <li key={index} onClick={() => cargarProductos(categoria)} style={{ cursor: 'pointer', color: 'blue' }}>
                        {categoria} {/* Muestra el nombre de la categoría */}
                    </li>
                ))}
            </ul>

            {/* Si hay una categoría seleccionada, muestra los productos de esa categoría */}
            {categoriaSeleccionada && (
                <div>
                    <h2>Productos en {categoriaSeleccionada}</h2>
                    <ul>
                        {productos.map(producto => (
                            <li key={producto.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                {/* Imagen del producto */}
                                <img 
                                    src={producto.image} 
                                    alt={producto.title} 
                                    style={{ width: '50px', height: '50px', cursor: 'pointer' }} 
                                    onClick={() => mostrarDetalles(producto)} 
                                />
                                {/* Información básica del producto */}
                                <div onClick={() => mostrarDetalles(producto)} style={{ cursor: 'pointer' }}>
                                    <strong>{producto.title}</strong> - ${producto.price} {/* Título y precio */}
                                </div>
                                {/* Botón para añadir el producto al carrito */}
                                <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Si se seleccionó un producto, muestra los detalles del producto */}
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
                    <button onClick={cerrarDetalles}>Cerrar</button> {/* Botón para cerrar los detalles del producto */}
                </div>
            )}
        </div>
    );
};

export default Categorias;



