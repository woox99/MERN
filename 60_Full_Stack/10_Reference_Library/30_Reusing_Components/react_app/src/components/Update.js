import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import PersonForm from './PersonForm';
import DeleteButton from './DeleteButton';

const Update = (props) => {
    const { id } = useParams();
    const [person, setPerson] = useState({});
    const [loaded, setLoaded] = useState(false); //will turn true after useEffect has gotten response
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true); //wont render the return until loaded is true
            })
    }, [])
    const updatePerson = personParam => {
        axios.post('http://localhost:8000/api/people/' + id,
            personParam)
            .then(navigate('/'));
    }

    return (
        <div>
            {/* will render once loaded is true after the response */}
            {loaded ? (
                <PersonForm
                    onSubmitProp={updatePerson}
                    initialFirstName={person.firstName}
                    initialLastName={person.lastName}
                />
                
            ) : null}
            <DeleteButton personId={person._id} successCallback={ () => navigate('/')}/>
        </div>
    );
}

export default Update;