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

    const deleteCallback = () => {
    }

    return (
        <div className='list'>
            <h1>Athletes</h1>
            <Button onClick={navigateAdd} variant='contained'>Add Athlete</Button>
            {
                athleteList.map((athlete, index) => (
                    <div key={index} className="item">
                        <Link to={`/display/${athlete._id}`}>{athlete.firstName} {athlete.lastName}</Link>
                        <span> | </span>
                        <Link to={`/edit/${athlete._id}`}>Edit</Link>
                        <span> | </span>
                        <DeleteButton athleteId={athlete._id} deleteCallback={deleteCallback}/>
                    </div>
                ))
            }
        </div>
    )
}

export default List;