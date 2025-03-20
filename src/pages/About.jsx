import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>Sobre Nosotros</h1>

      <section className="about-us-container">
        <p>
          Bienvenidos a nuestra tienda virtual, un lugar donde encontrarás productos cuidadosamente seleccionados para ofrecerte lo mejor en calidad y servicio. Fundada con el propósito de proporcionar una experiencia de compra en línea sencilla y confiable, nuestra tienda ha crecido con la idea de conectar a los usuarios con productos que mejoren su vida diaria.
        </p>

        <p>
          Nos enorgullece ofrecer una variedad de productos que incluyen desde tecnología de última generación hasta artículos para el hogar y la vida diaria. Cada artículo en nuestro catálogo es elegido con el máximo cuidado, buscando siempre las mejores marcas y las mejores ofertas para ti. Nos importa tu satisfacción, y por eso, nos esforzamos por mantener altos estándares de calidad en cada producto que ofrecemos.
        </p>


        <p>
          Además, somos un equipo que valora la solidaridad y el compromiso con la comunidad. Por eso, parte de nuestras ganancias se destinan a apoyar iniciativas sociales que contribuyen a mejorar la vida de aquellos que más lo necesitan. Creemos firmemente en el poder de hacer el bien y de ayudar a otros a alcanzar sus sueños, y por eso trabajamos cada día para ser una empresa más responsable y consciente.
        </p>

        <p>
          Nuestro equipo está formado por profesionales apasionados que trabajan cada día para ofrecerte una experiencia de compra segura, fácil y rápida. Ya sea que busques un regalo especial o simplemente necesites un artículo para tu día a día, estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros si tienes alguna duda o necesitas asistencia en tu compra.
        </p>


        <Link to="/contactar" className="contact-link">Contáctanos</Link>
      </section>
    </>
  );
}

export default About;
