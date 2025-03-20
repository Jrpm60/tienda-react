import React from 'react';
import styles from "./Head.module.css";
import logo from "../../assets/Tienda_virtual.PNG";

function Head({ title }) {
  return (
    <header className={styles.headContainer}>
        <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <h3>{title}</h3>
      
    </header>
  );
}

export default Head;