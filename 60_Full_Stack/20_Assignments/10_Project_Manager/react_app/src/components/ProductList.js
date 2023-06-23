import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ProductList = props => {
    const {products, setProducts} = props
    
    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then( res => {
                setProducts(res.data);
            })
            .catch( err => console.log(err))
    }, [products])

    return (
        <div>
            <h2>Products List</h2>
            {
                products.map( (product, index) =>
                <div key={index}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                </div>
                )
            }
        </div>
    )
}

export default ProductList;


