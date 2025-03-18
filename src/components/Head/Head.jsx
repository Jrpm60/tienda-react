import React from 'react';
import styles from "./Head.module.css";
import logo from "../../assets/Tienda_virtual.PNG";

function Head({ title }) {
  return (
    <header className={styles.headContainer}>
        <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <h1>{title}</h1>
      
    </header>
  );
}

export default Head;