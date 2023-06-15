import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Survey = (props) => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.getName(name);

        setName('');
        navigate('/display');

        // to send the user back one page
        // navigate(-1);
    }
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={ (e) => {setName(e.target.value)}} />
        <input type="submit"  value='Submit' />
        </form>
    </div>
);
}

export default Survey;