import Form from './Form.js';
import axios from 'axios';

const AddAthlete = () => {

    const createAthlete = athlete => {
        console.log(athlete);

        axios.post('http://localhost:8000/api/athletes', athlete)
            .then()
            .catch(err => console.log(err))
    }

    return(
        <div className='add'>
            <h1>Add New Athlete</h1>
            <Form submitFunc={createAthlete}/>
        </div>
    )
}

export default AddAthlete;