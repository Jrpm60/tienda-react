import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Head from "./components/Head/Head";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contactar from "./pages/Contactar";
import Products from "./pages/Products";
import Usuarios from "./pages/Usuarios";
import Carrito from "./pages/Carrito";
import Titulo from "./pages/Titulo";

import { useState } from "react";


function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (index) => {
    setCarrito(carrito.filter((_, i) => i !== index));
  };

  return (
    <>
      <Head title="Aprovecha las mejores ofertas al alcance de tu mano...." />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactar" element={<Contactar />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/titulo" element={<Titulo carrito={carrito} agregarAlCarrito={agregarAlCarrito} />}/>
        <Route path="/carrito" element={<Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />}/>
        <Route path="/products" element={<Products carrito={carrito} agregarAlCarrito={agregarAlCarrito} />}/>
        <Route path="/Usuarios" element={<Usuarios />} />
        
      



      </Routes>

    <Footer title=" ©️ Iñigo Bermejo & Jose R. Pablo" />
  


    </>
  );
}

export default App;

