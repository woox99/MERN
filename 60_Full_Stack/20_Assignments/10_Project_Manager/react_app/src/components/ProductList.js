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

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .catch(err => console.log(err))
    }

    return (
        <div className='product-list'>
            <h2>Products List</h2>
            {
                products.map( (product, index) =>
                <div className='item' key={index}>
                    <div>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                    <span> | </span> 
                    <Link to={`/update/${product._id}`}>Edit</Link>
                    </div>
                    <button onClick={ (e) => deleteProduct(product._id)}>Delete</button>
                </div>
                )
            }
        </div>
    )
}

export default ProductList;


