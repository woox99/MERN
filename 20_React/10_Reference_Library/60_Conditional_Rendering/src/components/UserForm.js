import React, { useState } from 'react';


const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object
        const newUser = { 
            username:username,
            email:email,
            password:password
        };

        console.log("Welcome", newUser);

        // resets useState variables after submit
        setUsername("");
        setEmail("");
        setPassword("");

        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <form onSubmit={createUser}>
            <h1>UserForm.js File</h1>
            <h3>{formMessage()}</h3>
            <div>
                <label>Username: </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;
