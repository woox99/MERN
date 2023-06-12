import React, { useState } from 'react';
// Import header.js function
import UserForm from './components/UserForm';
import DisplayBoxes from './components/DisplayBoxes';

function App() {
  const [boxes, setBoxes] = useState([]);


  const getBox = (newBox) => {
    setBoxes((prevBoxes) => [...prevBoxes, newBox])
  }
  

  return (
    <div className="App">
      <UserForm retreiveBox = {getBox}/>
      <DisplayBoxes sentBoxes = {boxes} />
    </div>
  );
}

export default App;
