import Form from './Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Add = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState([]);


    const createAthlete = (athlete) => {
        // console.log(athlete.firstName.length) //Debug
        setErrorMsg([]);

        const errors = [];

        if (athlete.firstName.length < 3) {
            errors.push('First name must be greater than 2 characters');
        }
        if (athlete.lastName.length < 3) {
            errors.push('Last name must be greater than 2 characters');
        }
        if (errors.length > 0) {
            setErrorMsg(errors);
        }
        else {
            axios.post('http://localhost:8000/api/athletes', athlete)
            .then(() => navigate('/'))
            .catch(err => {
                console.log(err.response.data.message);
                errors.push(err.response.data.message);
                setErrorMsg(errors);
            });
        }
    }

    return (
        <div>
            <h3>Add New Athlete</h3>
            {
                errorMsg.length > 0 && (
                    errorMsg.map((msg, index) => (
                        <p key={index}>{msg}</p>
                    ))
                )
            }
            <Form
                submitFunc={createAthlete}
                initFirstName=''
                initLastName=''
                initSport='' />
        </div>
    )
}

export default Add;