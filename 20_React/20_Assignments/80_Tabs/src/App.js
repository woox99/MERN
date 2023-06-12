import React, { useState } from 'react';
import './App.css'
// Import header.js function
import DisplayTabs from './components/DisplayTabs';
import DisplayMsg from './components/DisplayMsg';

function App() {
  const [msg, setMsg] = useState('Click on tab for contents.');

  const tabs = [
    'This is message for tab 1: Hello',
    'This is message for tab 2: World',
    'This is message for tab 3: !'
  ];

  const getMsg = (msg) => {
    setMsg(msg);
  }


  return (
    <div className="App">
      <div className="body">
        <DisplayTabs tabs={tabs} retrieveMsg={getMsg} ></DisplayTabs>
        <DisplayMsg msg={msg} ></DisplayMsg>
      </div>
    </div>
  );
}

export default App;
