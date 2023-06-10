import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            cPassword: cPassword
        };
        console.log("welcome", newUser);

        // resets the values after form is submitted
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setCPassword("");

    }

    return(
        <form onSubmit={createUser}>
            <div>
                <h1>User Form:</h1>
            </div>
        <div>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value)} />
        </div>
        <div>
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)} />
        </div>
        <div>
            <label>Email Address:</label>
            <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Password:</label>
            <input type="text" value={password} onChange={ (e) => setPassword(e.target.value)} />
        </div>
        <div>
            <label>Confirm Password:</label>
            <input type="text" value={cPassword} onChange={ (e) => setCPassword(e.target.value)} />
        </div>
        <input type="submit" value="Create User" />
        <p>Look at console when submit</p>
        <div>
            <h2>Your Form Data</h2>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confrimed Password: {cPassword}</p>
        </div>
        </form>
        
    );
};

export default UserForm;
