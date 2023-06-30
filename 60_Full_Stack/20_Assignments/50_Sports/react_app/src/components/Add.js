import Form from './Form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate();


    const createAthlete = (athlete) => {
        console.log(athlete)
        axios.post('http://localhost:8000/api/athletes', athlete)
            .then( () => navigate('/'))
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h3>Add New Athlete</h3>
            <Form submitFunc={createAthlete}/>
        </div>
    )
}

export default Add;