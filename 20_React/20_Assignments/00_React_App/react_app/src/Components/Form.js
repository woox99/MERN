import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Form = props => {
    const [select, setSelect] = useState(props.initSelect);
    const [id, setId] = useState(props.initId);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${select}/${id}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Search For:</label>
            <select name="" value={select} id="" onChange={ (e) => {setSelect(e.target.value)} }>
                <option value="people">People</option>
                <option value="planet">Planet</option>
            </select>
            <label> ID: </label>
            <input type="text" value={id} onChange={ (e) => {setId(e.target.value)} } />
            <input type="submit" value='Seach' />
        </form>

    );
}

export default Form;