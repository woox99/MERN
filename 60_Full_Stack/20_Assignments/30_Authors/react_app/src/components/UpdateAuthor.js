import {useState, useEffect} from 'react';
import {useNavigate, Link, useParams} from 'react-router-dom';
import AuthorForm from './AuthorForm';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const UpdateAuthor = props => {
    const [fName, setFirstName] = useState('');
    const [lName, setLastName] = useState('');
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false)
    const {id} = useParams();
    const [errors, setErrors] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors/' + id )
            .then( res => {
                setFirstName(res.data.fName);
                setLastName(res.data.lName);
                setIsLoaded(true);
            })
    })

    const updateAuthor = (author) => {
        axios.post('http://localhost:8000/api/authors/' + id, author)
            .then( () => navigate('/'))
            .catch( err => {
                const errorResponse = err.response.data.error;
                const errorArr = [];
                errorArr.push(errorResponse)
                setErrors(errorArr);
            })
    }

    useEffect( () => {
        console.log(errors);
    }, [errors]
    )

    return(
        <div className='update'>
            {
                isLoaded ?
                <div>
                    <h1>Edit {fName} {lName}</h1>
                    {
                        errors.map( (error, index) => (
                            <p key={index}>{error}</p>
                        )
                        )
                    }
                    <AuthorForm submitProp={updateAuthor} initFirst={fName} initLast={lName}/>
                </div>
                :null
            }
            <DeleteButton/>
        </div>
    )
}

export default UpdateAuthor;