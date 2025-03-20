import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo192.png"; // Import logo

const Contactar = () => {

  return (
    <>
      <h1>Contactar con Nosotros</h1>

      <div className="contact-logo">
        <img src={logo} alt="Logo" />
      </div>

      <section className="contact-info">
        <h2>Estamos aquí para ayudarte</h2>

        <p>
          Si tienes alguna duda, pregunta o comentario sobre nuestros productos, no dudes en ponerte en contacto con nosotros. Nuestro equipo está disponible para ofrecerte el mejor soporte.
        </p>

        <p>
          <strong>Dirección:</strong> Calle Ficticia 123, Ciudad Imaginaria, CP 45678
        </p>

        <p>
          <strong>Teléfono:</strong> +34 912 345 678
        </p>

        <p>
          <strong>Correo Electrónico:</strong> <a href="mailto:soporte@tiendavirtual.com">soporte@tiendavirtual.com</a>
        </p>

        <p>
          <strong>Redes Sociales:</strong>
          <ul>
            <li><a href="https://facebook.com/tiendavirtual" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com/tiendavirtual" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com/tiendavirtual" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </p>
        
      </section>
    </>
  );
}

export default Contactar;
