import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const PersonList = (props) => {
    const {people, setPeople} = props;

    useEffect( () => {
        axios.get("http://localhost:8000/api/people")
            .then( res => {
                console.log(res.data);
                setPeople(res.data);
            })
            .catch( err => {
                console.log(err);
            })
    }, [people])

    const deletePerson = (id) => {
        axios.delete('http://localhost:8000/api/people/' + id)
        .catch(err => console.log(err))
    }


    return (
        <div>
            {
                people.map( (person, index) => 
                <div key={index}>
                    <p>{person.lastName}, {person.firstName}</p>
                    <Link to={`/people/${person._id}`}>{person.firstName}'s Page | </Link>
                    <Link to={`/update/${person._id}`}>Edit</Link>
                    <button onClick={(e) => deletePerson(person._id)}>Delete</button>
                </div>
                
                )
            }
        </div>
    )
}

export default PersonList;