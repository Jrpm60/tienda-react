import React from 'react';

const Usuarios = () => {
  // Lista de usuarios con más detalles
  const users = [
    { id: 1, nombre: 'Juan Pérez', edad: 28, email: 'juan@example.com' },
    { id: 2, nombre: 'Ana García', edad: 34, email: 'ana@example.com' },
    { id: 3, nombre: 'Carlos López', edad: 22, email: 'carlos@example.com' },
    { id: 4, nombre: 'Lucía Martínez', edad: 26, email: 'lucia@example.com' },
    { id: 5, nombre: 'José Rodríguez', edad: 41, email: 'jose@example.com' },
    { id: 6, nombre: 'Laura Sánchez', edad: 29, email: 'laura@example.com' },
    { id: 7, nombre: 'David González', edad: 38, email: 'david@example.com' },
    { id: 8, nombre: 'Marta Pérez', edad: 32, email: 'marta@example.com' },
    { id: 9, nombre: 'Luis Fernández', edad: 25, email: 'luis@example.com' },
    { id: 10, nombre: 'Raquel Díaz', edad: 30, email: 'raquel@example.com' }
  ];

  return (
    <div className="usuarios-container">
      <h1 className="usuarios-title">Lista de Usuarios</h1>
      
      <ul className="usuarios-list">
        {users.map(user => (
          <li key={user.id} className="usuario-item">
            <h2>{user.nombre}</h2>
            <p><strong>Edad:</strong> {user.edad} años</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p>{user.nombre} es usuaria y ha disfrutado de un 20% de descuento en nuestros productos.</p>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
