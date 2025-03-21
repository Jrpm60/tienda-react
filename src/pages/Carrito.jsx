import React, { useState } from 'react';

const Carrito = ({ carrito, eliminarDelCarrito, vaciarCarrito }) => {

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Estados para gestionar los datos de pago
  const [metodoPago, setMetodoPago] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [nombreTitular, setNombreTitular] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
///////////////////////////////////////////////////////////////////////////////////////////////////////////


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

    // Manejo del pago y validación de los campos del formulario
    const handlePago = () => {
      if (!metodoPago || !numeroTarjeta || !nombreTitular || !fechaExpiracion) {
        alert("Por favor, completa todos los campos de pago.");
        return;
      }
  
      alert(`Pago de $${totalConIVA.toFixed(2)} realizado con éxito.`);
      vaciarCarrito(); // Vaciar el carrito después del pago exitoso
    };

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

{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* Sección de pago */}
          <legend id="payment-section-title"><h2>Método de Pago</h2></legend>
          <form id="payment-form" onSubmit={(e) => e.preventDefault()}>
            {/* Selección de tipo de tarjeta */}
            <label>
              Tipo de Tarjeta:
              <select 
                id="payment-method" 
                value={metodoPago} 
                onChange={(e) => setMetodoPago(e.target.value)} 
                required
              >
                <option value="">Selecciona tipo de tarjeta</option>
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                <option value="amex">American Express</option>
              </select>
            </label> 

            {/* Número de tarjeta */}
            <label><br /> <br />
              Número de Tarjeta:
              <input 
                id="card-number"
                type="text" 
                value={numeroTarjeta} 
                onChange={(e) => setNumeroTarjeta(e.target.value)} 
                placeholder="**** **** **** ****" 
                maxLength="16"
                required 
              />
            </label> 

            {/* Nombre del titular */}
            <label><br /> <br />
              Nombre del Titular:
              <input 
                id="card-holder-name"
                type="text" 
                value={nombreTitular} 
                onChange={(e) => setNombreTitular(e.target.value)} 
                placeholder="Nombre del titular"
                required 
              />
            </label> 

            {/* Fecha de expiración */}
            <label> <br /> <br />
              Fecha de Expiración:
              <input 
                id="card-expiration-date"
                type="month" 
                value={fechaExpiracion} 
                onChange={(e) => setFechaExpiracion(e.target.value)} 
                required 
              />
            </label> <br /> <br />

            {/* Botón de pago */}
            <button 
              id="payment-button"
              onClick={handlePago} 
              style={{ fontSize: '1.2em', padding: '8px 16px' }}
            >
              Pagar {totalConIVA.toFixed(2)}€
            </button>
          </form>
   {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////        */}


        </>
      )}
    </div>
  );
};

export default Carrito;

