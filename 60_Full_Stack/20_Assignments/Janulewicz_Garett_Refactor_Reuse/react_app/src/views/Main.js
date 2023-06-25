// import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    const [products, setProducts] = useState([]);

    const createProduct = (product) => {
        axios.post('http://localhost:8000/api/products', product)
            .then( res => {
                setProducts( [...products, res.data ]);
                console.log(product);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="App">
            <h1>Product Manager</h1>
            <ProductForm 
                onSubmit={createProduct} 
                initTitle={''}
                initDescription={''}
                initPrice={''}/>
            <ProductList products={products} setProducts={setProducts}/>
        </div>
    );
}

export default Main;
