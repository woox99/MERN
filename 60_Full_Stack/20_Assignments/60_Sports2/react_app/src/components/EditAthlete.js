import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';

const EditAthlete = props => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sport, setSport] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/athletes/' + id)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setSport(res.data.sport);
                setIsLoaded(true);
            })
    }, [])

    const updateAthlete = athlete => {
        axios.put('http://localhost:8000/api/athletes/' + id, athlete)
            .then(() => navigate('/'))
            .catch(err => {
                // console.log(err.response.data.errors) //debug
                const errorArr = [];
                for (const key of Object.keys(err.response.data.errors)) {
                    errorArr.push(err.response.data.errors[key].message)
                };
                setErrors(errorArr);
            })
    }

    return (
        <div>
            {

            }
            {
                isLoaded && (
                    <div>
                        <h2>Edit {firstName} {lastName}</h2>
                        {
                            errors.length > 0 && (
                                errors.map((error, index) => (
                                    <p key={index}>{error}</p>
                                )
                                )
                            )
                        }
                        <Form
                            submitFunc={updateAthlete}
                            initFirst={firstName}
                            initLast={lastName}
                            initSport={sport} />
                    </div>
                )
            }
        </div>
    )
}

export default EditAthlete;