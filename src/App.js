import logo from './logo.svg';
import './App.css';
import {Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


import Home from "./pages/Home";
import About from "./pages/About";
import Contactar from "./pages/Contactar";
import Pages from "./pages/Products";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Tienda Virtual</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
