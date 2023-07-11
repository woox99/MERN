import {Button} from '@mui/material'
import axios from 'axios';


const DeleteButton = props => {

    const handleDelete = athleteId => {
        axios.delete('http://localhost:8000/api/athletes/' + athleteId)
            .then(props.deleteCallback)
            .catch(err => console.log(err))
    }

    return(
        <div>
            <Button onClick={() => handleDelete(props.athleteId)}>Delete</Button>
        </div>
    )
}

export default DeleteButton;