import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Survey from './Components/Survey.js';
import DisplayName from './Components/DisplayName.js';
import {useState} from 'react';

function App() {
  const [name, setName] = useState('');

  const getName = name => {
    setName(name);
  }
  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Survey getName={getName}></Survey>}/>
        <Route path='/display' element={<DisplayName name={name}></DisplayName>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
