import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>TIENDA VIRTUAL</h1>

            <div id="contenedor">
                <div id="link-titulo" className="caja">
                    <Link to="/titulo">Ver todos los productos por título.</Link>
                </div>
                <div id="link-categorias" className="caja">
                    <Link to="/categorias">Seleccionar producto por categorías.</Link>
                </div>
                <div id="link-carrito" className="caja">
                    <Link to="/carrito">Productos almacenados en el carrito.</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;



