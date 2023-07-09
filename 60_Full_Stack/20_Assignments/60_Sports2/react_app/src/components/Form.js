import {
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@mui/material';
import { useState } from 'react';

const Form = props => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [sport, setSport] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        props.submitFunc(
            {
                firstName: first,
                lastName: last,
                sport: sport
            }
        )
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="First Name"
                        onChange={ e => setFirst(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="Last Name"
                        onChange={ e => setLast(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Sport</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="Sport"
                        onChange={ e => setSport(e.target.value)}
                    />
                </FormControl>
                <Button type='submit' variant='contained'>Submit</Button>
            </form>
        </div>
    )
}

export default Form;