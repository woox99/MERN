import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ProductForm = props => {
    const [title, setTitle] = useState(props.initTitle);
    const [price, setPrice] = useState(props.initPrice);
    const [description, setDescription] = useState(props.initDescription);

    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit({title, price, description});
    }

    return (
        <div>
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
                    <input className='sub-btn' type="submit" value='Create' />
                </div>
            </form>
        </div>
    )
}

export default ProductForm;


