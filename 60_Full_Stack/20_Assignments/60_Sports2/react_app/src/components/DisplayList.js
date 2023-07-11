import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom';
import {
    Button,
} from '@mui/material';
import DeleteButton from './DeleteButton';

const DisplayList = () => {
    const [athleteList, setAthleteList] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/api/athletes')
            .then( res => {
                // console.log(res.data)
                setAthleteList(res.data)
            })
            .catch(err => console.log(err))
    }, [athleteList])

    const navigateToAdd = () => {
        navigate('/add');
    }

    return(
        <div>
            <h2>Athlete List</h2>
                {
                    athleteList.map( (athlete, index) => (
                        <div key={index}
                        className='athlete'>
                            <Link to={`/display/${athlete._id}`}>{athlete.firstName} {athlete.lastName}</Link>
                            <span> | </span>
                            <Link to={`/edit/${athlete._id}`}>Edit</Link>
                            <DeleteButton athleteId={athlete._id} deleteCallback={null}>Delete</DeleteButton>
                        </div>
                    ))
                }
                <Button variant='contained' onClick={navigateToAdd}>Add Athlete</Button>
        </div>
    )
}

export default DisplayList;