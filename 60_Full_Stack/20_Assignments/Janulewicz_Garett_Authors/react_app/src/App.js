import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorList from './components/AuthorList';
import UpdateAuthor from './components/UpdateAuthor';
import CreateAuthor from './components/CreateAuthor';
import axios from 'axios';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthorList/>}/>
        <Route path='/create' element={<CreateAuthor/>}/>
        <Route path='/edit/:id' element={<UpdateAuthor/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
