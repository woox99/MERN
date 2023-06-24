import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const PersonList = (props) => {
    const {personList, setPersonList} = props;

    useEffect( () => {
        axios.get("http://localhost:8000/api/people")
            .then( res => {
                console.log(res.data);
                setPersonList(res.data);
            })
            .catch( err => {
                console.log(err);
            })
    }, [personList])


    return (
        <div>
            {
                personList.map( (person, index) => 
                <div key={index}>
                    <p>{person.lastName}, {person.firstName}</p>
                    <Link to={`/people/${person._id}`}>{person.firstName}'s Page | </Link>
                    <Link to={`/update/${person._id}`}>Edit</Link>
                    <DeleteButton personId={person._id} successCallback={()=>props.removeFromDom(person._id)}/>
                </div>
                
                )
            }
        </div>
    )
}

export default PersonList;