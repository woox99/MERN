import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [validateFirst, setValidateFirst] = useState("");
    const [validateLast, setValidateLast] = useState("");
    const [validateEmail, setValidateEmail] = useState("");
    const [validatePassword, setValidatePassword] = useState("");
    const [validateCPassword, setValidateCPassword] = useState("");

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

    const validateForm = (e) => {
        const {name, value} = e.target;
        if( name == 'firstName'){
            setFirstName(value);
            if ( value.length < 2 ){
                setValidateFirst("First name must be at least 2 characters.");
            }
            else{
                setValidateFirst("");
            }
        }
        if( name == 'lastName'){
            setLastName(value);
            if ( value.length < 2 ){
                setValidateLast("Last name must be at least 2 characters.");
            }
            else{
                setValidateLast("");
            }
        }
        if( name == 'email'){
            setEmail(value);
            if ( value.length < 2 ){
                setValidateEmail("Email must be at least 2 characters.");
            }
            else{
                setValidateEmail("");
            }
        }
        if( name == 'password'){
            setPassword(value);
            if ( value.length < 8 ){
                setValidatePassword("Password must be at least 8 characters.");
            }
            else{
                setValidatePassword("");
            }
        }
        if( name == 'cpassword'){
            setCPassword(value);
            if ( value != password ){
                setValidateCPassword("Passwords must match.");
            }
            else{
                setValidateCPassword("");
            }
        }
    }

    return(
        <form onSubmit={createUser}>
            <div>
                <h1>User Form:</h1>
            </div>
        <div>
            <label>First Name:</label>
            <input type="text" name='firstName' value={firstName} onChange={validateForm} />
            {
                validateFirst ?
                <p>{ validateFirst}</p>:
                ''
            }
        </div>
        <div>
            <label>Last Name:</label>
            <input type="text" name='lastName' value={lastName} onChange={validateForm} />
            {
                validateLast ?
                <p>{ validateLast}</p>:
                ''
            }
        </div>
        <div>
            <label>Email Address:</label>
            <input type="text" name='email' value={email} onChange={validateForm} />
            {
                validateEmail ?
                <p>{ validateEmail }</p>:
                ''
            }
        </div>
        <div>
            <label>Password:</label>
            <input type="text" name='password' value={password} onChange={ validateForm} />
            {
                validatePassword ?
                <p>{ validatePassword}</p>:
                ''
            }
        </div>
        <div>
            <label>Confirm Password:</label>
            <input type="text" name='cpassword' value={cPassword} onChange={validateForm} />
            {
                validateCPassword ?
                <p>{validateCPassword}</p>:
                ''
            }
        </div>
        <input type="submit" value="Create User" />
        </form>
        
    );
};

export default UserForm;
