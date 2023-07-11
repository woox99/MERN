import { useParams } from "react-router-dom";
import Form from './Form';

const EditAthlete = props => {
    const {id} = useParams();

    useEffect

    return(
        <div>
            <h2>Edit</h2>
            <Form/>
        </div>
    )
}

export default EditAthlete;