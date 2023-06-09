// This app does not actually run its just for reference

import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    return (
        <div>
            {/* // instead of onclick='function_name()' its now onClick={function} */}
            <button onClick={handleClick}>Click me</button>
    
            {/* // or arrow function notation onClick={ () => } */}
            <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
        </div>
    );
}

// funct defined here if NOT using arrow function notations
function handleClick() {
    alert("This button has been clicked!");
}
export default App;