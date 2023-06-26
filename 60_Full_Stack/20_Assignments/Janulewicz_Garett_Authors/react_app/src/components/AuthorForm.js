import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';

const AuthorForm = props => {
    const [fName, setFirstName] = useState(props.initFirst);
    const [lName, setLastName] = useState(props.initLast);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
    
        props.submitProp({fName, lName});
    }

    return(
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div className="form-body">
                <div className="form-line">
                <label>Author First Name: </label>
                <input type="text" value={fName} onChange={ (e) => {setFirstName(e.target.value)}}/>
                </div>
                <div className="form-line">
                <label>Author Last Name: </label>
                <input type="text" value={lName} onChange={ (e) => {setLastName(e.target.value)}} />
                </div>
                <input type="submit" value='Submit'/>
                </div>
            </form>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default AuthorForm;