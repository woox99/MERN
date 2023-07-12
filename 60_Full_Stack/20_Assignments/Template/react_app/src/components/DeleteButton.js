import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
    Button,
} from '@mui/material';

const DeleteButton = props => {

    const handleDelete = id => {
        axios.delete('http://localhost:8000/api/athletes/' + id)
            .then(props.deleteCallback)
            .catch(err => console.log(err))
    }

    return(
        <div>
            <Button onClick={() => handleDelete(props.id)}>Delete</Button>
        </div>
    )
}

export default DeleteButton;