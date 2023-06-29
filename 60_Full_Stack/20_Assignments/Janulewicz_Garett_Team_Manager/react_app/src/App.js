import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Add from './components/Add';
import List from './components/List';
import Status1 from './components/Status1';
import Status2 from './components/Status2';
import Status3 from './components/Status3';

function App() {

  return (
    <div className="App">
      <h1>Player Manager</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/status1' element={<Status1/>} />
          <Route path='/status2' element={<Status2/>} />
          <Route path='/status3' element={<Status3/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
