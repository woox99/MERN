import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';

const Update = props => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setIsLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = product => {

        axios.post('http://localhost:8000/api/products/' + id, product)
            .then(navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit {title}</h1>
            {
                isLoaded ?
                    <ProductForm
                        onSubmit={updateProduct}
                        initTitle={title}
                        initDescription={description}
                        initPrice={price} />
                    : null
            }
            <DeleteButton productId={id} successCallback={() => navigate('/')}/>
        </div>
    )
}

export default Update;


