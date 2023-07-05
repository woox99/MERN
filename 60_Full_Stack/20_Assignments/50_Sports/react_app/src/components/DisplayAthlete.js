import {useParams, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const DisplayAthlete = props => {
    const {id} = useParams();
    const [athlete, setAthlete] = useState('');
    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`http://localhost:8000/api/athletes/${id}`)
            .then( res => {
                setAthlete(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteCallback = () => {
        navigate('/');
    }

    return(
        <div>
                <h2>{athlete.firstName} {athlete.lastName}</h2>
                <p>Sport: {athlete.sport}</p>
                <DeleteButton athleteId={athlete._id} deleteCallback={deleteCallback}/>
        </div>
    )
}

export default DisplayAthlete;