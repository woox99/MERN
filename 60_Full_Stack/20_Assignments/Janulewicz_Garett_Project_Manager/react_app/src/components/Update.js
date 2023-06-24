import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Update = props => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit {title}</h1>
            <form onSubmit={handleSubmit}>
                <div className="product-form">
                    <p className='title'>
                        <label>Product Title: </label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </p>
                    <p className='price'>
                        <label>Product Price: </label>
                        <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
                    </p>
                    <p className='description'>
                        <label>Product Description: </label>
                        <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                    </p>
                    <input type="submit" value='Update' />
                </div>
            </form>
        </div>
    )
}

export default Update;


