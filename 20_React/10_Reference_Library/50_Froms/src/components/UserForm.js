import React, {useState} from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {
            username: username,
            email: email,
            password: password
        };
        console.log("welcome", newUser);

        // resets the values after form is submitted
        setUsername("");
        setEmail("");
        setPassword("");

    }

    return(
        <form onSubmit={createUser}>
        <div>
            <label>Username:</label>
            {/* value is originally set to emtpy string */}
            <input type="text" value={username} onChange={ (e) => setUsername(e.target.value)} />
        </div>
        <div>
            <label>Email Address:</label>
            <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Password:</label>
            <input type="text" value={password} onChange={ (e) => setPassword(e.target.value)} />
        </div>
        <input type="submit" value="Create User" />
        <p>Look at console when submit</p>
        </form>
        
    );
};

export default UserForm;
