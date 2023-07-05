import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Add from './components/Add'
import List from './components/List'
import DisplayAthlete from './components/DisplayAthlete';
import EditAthlete from './components/Edit';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/display/:id' element={<DisplayAthlete/>}/>
        <Route path='/edit/:id' element={<EditAthlete/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
