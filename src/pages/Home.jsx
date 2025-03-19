import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (

         <div className='main'>
            <p>Bienvenido a la página de inicio.</p>
            <h1>TIENDA VIRTUAL</h1>

            <div id="contenedor">
                <div className="caja">
                    <Link to="/titulo">Ver todos los productos por título.</Link>
                </div>
                <div className="caja">
                    <Link to="/categorias">Seleccionar producto por categorías.</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;

