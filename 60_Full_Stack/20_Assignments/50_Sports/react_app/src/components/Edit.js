import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Form from './Form';
import {useState, useEffect} from 'react';

const EditAthlete = props => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sport, setSport] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    const updateAthlete = (athlete) => {
        axios.put('http://localhost:8000/api/athletes/' + id, athlete )
            .then(() => navigate('/') )
            .catch( err => console.log(err))
    }

    useEffect( () => {
        axios.get('http://localhost:8000/api/athletes/' + id)
            .then( res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setSport(res.data.sport);
                setIsLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h2>Edit Athlete</h2>
            {
                isLoaded ?
                <Form submitFunc={updateAthlete}
                initFirstName={firstName}
                initLastName={lastName}
                initSport={sport}/>
                :null
            }
            <Link to='/'>Back to Athletes</Link>
        </div>
    )
}

export default EditAthlete;