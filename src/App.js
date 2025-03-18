import './App.css';
import {Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Head from "./components/Head/Head";


import Home from "./pages/Home";
import About from "./pages/About";
import Contactar from "./pages/Contactar";
import Usuarios_din from "./pages/Usuarios_din";
import Usuarios from "./pages/Usuarios";

function App() {
 
  return (
    <>
    <Head title="Tienda Virtual" />
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactar" element={<Contactar />} />
        <Route path="/Usuarios_din" element={<Usuarios_din />} />
        <Route path="/Usuarios" element={<Usuarios />} />

      </Routes>
  
    </>
  );
}

export default App;