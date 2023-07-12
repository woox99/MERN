import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddAthlete from './components/AddAthlete';
import DisplayList from './components/DisplayList';
import DisplayAthlete from './components/DisplayAthlete';
import EditAthlete from './components/EditAthlete';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/add' element={<AddAthlete/>}/>
        <Route path='/' element={<DisplayList/>}/>
        <Route path='/display/:id' element={<DisplayAthlete/>}/>
        <Route path='/edit/:id' element={<EditAthlete/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
