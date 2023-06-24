import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Detail = props => {
    const {id} = useParams();
    const [product, setProduct] = useState('');
    const navigate = useNavigate();
    
    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then( res => {
                setProduct(res.data);
            })
            .catch( err => console.log(err))
    }, [])

    const deleteProduct = productId => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div className='detail'>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={ e => deleteProduct(product._id) }>Delete</button>
        </div>
    )
}

export default Detail;


