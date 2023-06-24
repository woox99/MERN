import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PersonForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName ] = useState("");
    const {people, setPeople} = props

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then( res => {
                console.log(res);
                console.log(res.data);
                setPeople( [...people, res.data])
            })
            .catch( err => {
                console.log(err);
            })

        setFirstName('');
        setLastName('');
    }
    return (
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
    )
}  

export default PersonForm;

