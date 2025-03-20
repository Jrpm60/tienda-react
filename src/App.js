import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Head from "./components/Head/Head";

import Home from "./pages/Home";
import About from "./pages/About";
import Contactar from "./pages/Contactar";
import Usuarios from "./pages/Usuarios";
import Titulo from "./pages/Titulo"; 
import Categorias from "./pages/Categorias"; 
import Carrito from "./pages/Carrito";

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
      <Head title="Tienda Virtual" />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactar" element={<Contactar />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/Titulo" element={<Titulo agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/categorias" element={<Categorias agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/carrito" element={<Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />} /> 
      </Routes>
    </>
  );
}

export default App;

