import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const DisplayAthlete = props => {
    const { id } = useParams();
    const [athlete, setAthlete] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/athletes/' + id)
            .then(res => {
                setAthlete(res.data);
                console.log(res.data);
            })
    }, [])

    return (
        <div>
            {
                athlete && (
                    <div>
                        <h2>{athlete.firstName} {athlete.lastName}</h2>
                        <p>Sport: {athlete.sport}</p>
                        <DeleteButton athleteId={athlete._id} deleteCallback={ () => navigate('/')}/>
                    </div>
                )
            }
            <Link to={'/'}>Back to List</Link>
        </div>
    )
}

export default DisplayAthlete;