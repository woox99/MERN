import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Detail = props => {
    const {id} = useParams();
    const [product, setProduct] = useState('');
    
    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then( res => {
                setProduct(res.data);
            })
            .catch( err => console.log(err))
    }, [])

    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default Detail;


