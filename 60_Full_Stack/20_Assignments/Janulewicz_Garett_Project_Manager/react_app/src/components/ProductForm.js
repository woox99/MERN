import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ProductForm = props => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const {products, setProducts} = props;

    const handleSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then( res => {
                setProducts( [...products, res.data ]);
                // console.log(products);
            })
            .catch(err => console.log(err))
        
        setTitle('');
        setPrice('');
        setDescription('');
    }


    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <div className="product-form">
                    <p className='title'>
                        <label>Product Title: </label>
                        <input type="text" onChange={ (e) => setTitle(e.target.value)} value={title} />
                    </p>
                    <p className='price'>
                        <label>Product Price: </label>
                        <input type="text" onChange={ (e) => setPrice(e.target.value)} value={price} />
                    </p>
                    <p className='description'> 
                        <label>Product Description: </label>
                        <input type="text" onChange={ (e) => setDescription(e.target.value)} value={description} />
                    </p>
                    <input type="submit" value='Create' />
                </div>
            </form>
        </div>
    )
}

export default ProductForm;


