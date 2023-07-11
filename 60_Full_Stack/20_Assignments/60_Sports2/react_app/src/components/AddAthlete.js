import Form from './Form.js';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const AddAthlete = () => {
    const navigate = useNavigate();

    const createAthlete = athlete => {
        console.log(athlete);

        axios.post('http://localhost:8000/api/athletes', athlete)
            .then( () => navigate('/'))
            .catch(err => console.log(err))
    }

    return(
        <div className='add'>
            <h1>Add New Athlete</h1>
            <Form submitFunc={createAthlete}/>
            <Link to='/'>Back to List</Link>
        </div>
    )
}

export default AddAthlete;