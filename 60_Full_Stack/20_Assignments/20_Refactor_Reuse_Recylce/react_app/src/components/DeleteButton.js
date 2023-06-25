import React from "react";
import axios from "axios";

const DeleteButton = props => {

    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + props.productId)
            .then( res => {props.successCallback})
            .catch(err => console.log(err))
    }

    return(
        <button onClick={deleteProduct}>Delete</button>
    )

}

export default DeleteButton;