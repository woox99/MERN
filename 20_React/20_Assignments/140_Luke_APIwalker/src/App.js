import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect} from 'react';
import Form from './Components/Form';
import People from './Components/People';
import Planet from './Components/Planet';

function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Form initSelect='people' initId=''/>} />
        <Route path='/people/:paramId' element={<People/>} />
        <Route path='/planet/:paramId' element={<Planet/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
