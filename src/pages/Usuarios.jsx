import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/logo192.png"; // Import logo
import logo1 from "../assets/BS.PNG"; // Import logo
import logo2 from "../assets/80.PNG"; // Import logo
import { useParams } from 'react-router-dom';

const Usuarios = () => {

  const users = [
    { id: 1, nombre: 'Iñigo Bermejo'},
    { id: 2, nombre: 'Alvaro Jimenez'},
    { id: 3, nombre: 'Dana Duarte'},
    { id: 4, nombre: 'Jason Rodriguez'},
    { id: 5, nombre: 'Eddie Vera'},
    { id: 6, nombre: 'Ixchel Chavez'},
    { id: 7, nombre: 'Joussef Medmourh'},
    { id: 8, nombre: 'Luis Zamora'},
  ];

  return (
    
    <div className='main'>

      <h1>Lista de Usuarios</h1>
      
      <ul>
        
        {users.map(user => (

          <li key={user.nombre}>{user.nombre}
          
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