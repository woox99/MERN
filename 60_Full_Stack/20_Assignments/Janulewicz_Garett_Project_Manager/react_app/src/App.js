import './App.css';
import React from 'react';
// import ProductForm from './components/ProductForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Main></Main>}></Route>
          <Route path={'/products/:id'} element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
