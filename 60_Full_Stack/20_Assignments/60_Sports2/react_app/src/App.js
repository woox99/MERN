import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddAthlete from './components/AddAthlete';
import DisplayList from './components/DisplayList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/add' element={<AddAthlete/>}/>
        <Route path='/' element={<DisplayList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
