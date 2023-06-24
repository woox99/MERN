import React, { useEffect, useState } from 'react'

const PersonForm = props => {
    const [firstName, setFirstName] = useState(props.initialFirstName);
    const [lastName, setLastName ] = useState(props.initialLastName);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmitProp({firstName, lastName});
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>First Name</label><br/>
                <input type="text" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}  

export default PersonForm;

