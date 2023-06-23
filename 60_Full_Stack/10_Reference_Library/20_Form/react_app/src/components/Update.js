import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";

const Update = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then( res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
            .catch( err => {
                console.log(err);
            })
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/people/' + id, {
            firstName,
            lastName
        })
            .then( res => navigate('/') )
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit Person</h1>
            <form onSubmit={handleSubmit}>
            <p>
                <label>First Name</label><br/>
                <input type="text" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
        </div>
    );
}

export default Update;