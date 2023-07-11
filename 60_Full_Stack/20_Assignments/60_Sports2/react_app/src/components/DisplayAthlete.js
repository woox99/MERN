import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const DisplayAthlete = props => {
    const { id } = useParams();
    const [athlete, setAthlete] = useState();

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
                    </div>
                )
            }
            <Link to={'/'}>Back to List</Link>
        </div>
    )
}

export default DisplayAthlete;