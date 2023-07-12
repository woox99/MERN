import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
    Button,
    FormControl,
    InputLabel,
    Input,
} from '@mui/material';


const Form = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        // props.submitFunc(
        //     {
        //         firstName: firstName,
        //         lastName: lastName,
        //     });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel>First Name</InputLabel>
                    <Input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel>Last Name</InputLabel>
                    <Input type='text' value={lastName} onChange={e => setLastName(e.target.value)} />
                </FormControl>
                <Button 
                    type='submit' 
                    variant='contained'
                    style={{marginTop: '10px'}}>Submit</Button>
            </form>
        </div>
    )
}

export default Form;