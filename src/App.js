import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Head from "./components/Head/Head";

import Home from "./pages/Home";
import About from "./pages/About";
import Contactar from "./pages/Contactar";
import Usuarios from "./pages/Usuarios";
import Titulo from "./pages/Titulo"; // ✅ Nueva página
import Categorias from "./pages/Categorias"; // ✅ Nueva página

function App() {
  return (
    <>
      <Head title="Tienda Virtual" />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactar" element={<Contactar />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/titulo" element={<Titulo />} /> {/* ✅ Nueva ruta */}
        <Route path="/categorias" element={<Categorias />} /> {/* ✅ Nueva ruta */}
      </Routes>
    </>
  );
}

export default App;
