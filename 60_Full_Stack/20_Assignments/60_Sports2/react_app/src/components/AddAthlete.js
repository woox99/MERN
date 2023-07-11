import Form from './Form.js';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddAthlete = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const createAthlete = athlete => {


        axios.post('http://localhost:8000/api/athletes', athlete)
            .then(() => navigate('/'))
            .catch(err => {
                // console.log(err.response.data.errors); //debug
                const errorArr = [];
                for (const key of Object.keys(err.response.data.errors)) {
                    errorArr.push(err.response.data.errors[key].message)
                }
                setErrors(errorArr);
            })

    }

    return (
        <div className='add'>
            <h1>Add New Athlete</h1>
            {
                errors.length > 0 && (
                    errors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))
                )
            }
            <Form submitFunc={createAthlete}
                initFirst=''
                initLast=''
                initSport='' />
            <Link to='/'>Back to List</Link>
        </div>
    )
}

export default AddAthlete;