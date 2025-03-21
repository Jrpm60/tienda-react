import React, { useState } from 'react';

const Carrito = ({ carrito, eliminarDelCarrito, vaciarCarrito }) => {






  
  const [cantidades, setCantidades] = useState(
    carrito.reduce((acc, producto, index) => {
      acc[index] = producto.cantidad || 1;
      return acc;
    }, {})
  );

  const actualizarCantidad = (index, cantidad) => {
    setCantidades((prevCantidades) => ({
      ...prevCantidades,
      [index]: cantidad
    }));
  };

  const totalSinIVA = carrito.reduce((acc, producto, index) => {
    const cantidad = cantidades[index] || 1;
    return acc + producto.price * cantidad;
  }, 0);

  const IVA = 0.16;
  const totalConIVA = totalSinIVA * (1 + IVA);

  return (
    
    <div class="main" id="cart-container">
      <h1 id="cart-title">Carrito de Compras</h1>

      {carrito.length === 0 ? (
        <p id="cart-empty-message">El carrito está vacío</p>
      ) : (
        <>
          <ul id="cart-items">
            {carrito.map((producto, index) => (
              <li key={index} className="cart-item">
                <img src={producto.image} alt={producto.title} width="50" height="50" />
                <strong>{producto.title}</strong> {producto.price.toFixed(2)}€
                <label>
                  Unidades:
                  <input
                    type="number"
                    className="cart-item-quantity"
                    value={cantidades[index] || 1}
                    onChange={(e) => actualizarCantidad(index, parseInt(e.target.value))}
                    min="1"
                  />
                </label>
                <strong> {(producto.price * (cantidades[index] || 1)).toFixed(2)}€</strong>
                <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
              </li>
            ))}
          </ul>

          <h3>Total sin IVA: {totalSinIVA.toFixed(2)}€</h3>
          <h3>IVA (16%): {(totalSinIVA * IVA).toFixed(2)}€</h3>
          <h3>Total con IVA: {totalConIVA.toFixed(2)}€</h3>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
      )}
    </div>
  );
};

export default Carrito;

