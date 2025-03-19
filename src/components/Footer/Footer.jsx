import React from 'react';
import styles from "./Footer.module.css";
import logo from "../../assets/Tienda_virtual.PNG";

function Footer({ title }) {
  return (
    <footer className={styles.FooterContainer}>

      <h1>{title}</h1>
      
    </footer>
  );
}

export default Footer;