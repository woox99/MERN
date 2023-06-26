import AuthorForm from "./AuthorForm"
import axios from "axios";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

const CreateAuthor = props => {
    const[errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createAuthorFunc = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then( () => navigate('/'))
            .catch( err => {
                const errorArr = [];
                const errorResponse = err.response.data.errors;
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div className="create">
            <h3>Add New Favorite Author</h3>
            {
                errors.map( (err, index) => (
                    <p key={index}>{err}</p>
                ))
            }
            <AuthorForm submitProp={createAuthorFunc} initFirst='' initLast='' errors={errors}/>
        </div>
    )
}

export default CreateAuthor;