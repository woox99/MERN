import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Button} from '@mui/material';
import DeleteButton from './DeleteButton';


const List = () => {
    const [athleteList, setAthleteList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/athletes")
            .then(athletes => {
                setAthleteList(athletes.data);
                // console.log(athletes.data);
            })
            .catch(err => console.log(err))
    }, [athleteList])

    const navigateAdd = () => {
        navigate('/add');
    }

    return (
        <div className='list'>
            <h1>Athletes</h1>
            <Button onClick={navigateAdd} variant='contained'>Add Athlete</Button>
            {
                athleteList.map((athlete, index) => (
                    <div key={index} className="item">
                        <Link>{athlete.firstName} {athlete.lastName}</Link>
                        <span> | </span>
                        <Link>Edit</Link>
                        <span> | </span>
                        <DeleteButton athleteId={athlete._id}/>
                    </div>
                ))
            }
        </div>
    )
}

export default List;