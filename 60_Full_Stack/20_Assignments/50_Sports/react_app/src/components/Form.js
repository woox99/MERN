import {
    Button,
    FormControl,
    InputLabel,
    Input,
} from '@mui/material';
import { useState, useEffect } from 'react';

const Form = props => {
    const [firstName, setFirstName] = useState(props.initFirstName);
    const [lastName, setLastName] = useState(props.initLastName);
    const [sport, setSport] = useState(props.initSport);

    const handleSubmit = e => {
        e.preventDefault();

        props.submitFunc(
            {
                firstName: firstName,
                lastName: lastName,
                sport: sport
            });
    }


    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <FormControl className='input'>
                    <InputLabel>First Name</InputLabel>
                    <Input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />
                </FormControl>
                <FormControl className='input'>
                    <InputLabel>Last Name</InputLabel>
                    <Input type='text' value={lastName} onChange={e => setLastName(e.target.value)} />
                </FormControl>
                <FormControl className='input'>
                    <InputLabel>Sport</InputLabel>
                    <Input value={sport} type='text' onChange={e => setSport(e.target.value)} />
                </FormControl>
                <Button id='submit-btn' variant='contained' type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default Form;