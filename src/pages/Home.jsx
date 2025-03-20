import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/Pabber_Logo.png";
import video from "../assets/video_home.mp4";
import product1 from "../assets/product1.png"; 
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import productA from "../assets/productA.png";
import productB from "../assets/productB.png";
import productC from "../assets/productC.png";

const Home = () => {
    return (
        
        <div className='main' style={{ position: 'relative' }}>
            <div className='banner-left'>
                <div className="banner">
                    <img src={product1} alt="Producto 1" />
                    <img src={product2} alt="Producto 2" />
                    <img src={productA} alt="Producto A" />
                    <img src={product3} alt="Producto 3" />
                </div>
            </div>

            <div className='banner-right'>
                <div className="banner">
                    <img src={productA} alt="Producto A" />
                    <img src={productB} alt="Producto B" />
                    <img src={product2} alt="Producto 2" />
                    <img src={productC} alt="Producto C" />
                </div>
            </div>

            <h3>Bienvenido a</h3>
            <img src={logo} alt="Logo" />
            <h1>Tu experiencia de 'Surfer Shopping' en la red...</h1>

            <video width="800" height="400" controls loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
        
    );
};

export default Home;



