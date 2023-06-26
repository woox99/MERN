import axios from "axios";

const DeleteButton = props => {


    const deleteAuthor = (e) => {
        axios.delete('http://localhost:8000/api/authors/' + props.authorId)
    }

    return(
        <button onClick={deleteAuthor}>Delete</button>
    )
}

export default DeleteButton;