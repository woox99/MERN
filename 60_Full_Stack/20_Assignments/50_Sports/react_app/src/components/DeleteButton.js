import axios from "axios";

const DeleteButton = (props) => {

    const deleteAthlete = athleteId => {
        axios.delete('http://localhost:8000/api/athletes/' + athleteId)
            .then( res => {
                props.deleteCallback();
            })
    }


    return(
        <button onClick={() => deleteAthlete(props.athleteId)}>Delete</button>
    )
}

export default DeleteButton;