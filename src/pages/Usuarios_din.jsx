import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/logo192.png"; // Import logo
import logo1 from "../assets/BS.PNG"; // Import logo
import logo2 from "../assets/80.PNG"; // Import logo
import { useParams } from 'react-router-dom';

const Usuarios = () => {

  const users = [
    { id: 1, nombre: 'Juan Pérez', edad: 28 },
    { id: 2, nombre: 'Ana García', edad: 34 },
    { id: 3, nombre: 'Carlos López', edad: 22 },
  ];

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      
      <ul>
        
        {users.map(user => (

          <li key={user.nombre}>{user.nombre}
          <Link to={`/usuarios_din/${user.id}`}> Ir al Usuario </Link>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default Usuarios;

/* 
        <img src={logo} alt="Logo" />
        <img src={logo1} alt="Logo1" />
        <img src={logo2} alt="Logo2" />
 
} */