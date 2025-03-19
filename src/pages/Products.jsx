import React from 'react';
import { Link } from "react-router-dom";


const Products = () => {
  


const handleProducts = () => {

    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))

}
    
    return (
        <div>
            <p>PRODUCTOS</p>
        </div>
    );
};

export default Products;