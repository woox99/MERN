import './App.css';
import AddAthlete from './components/AddAthlete';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/add' element={<AddAthlete/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
