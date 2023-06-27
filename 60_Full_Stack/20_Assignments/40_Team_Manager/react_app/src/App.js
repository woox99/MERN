import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Add from './components/Add';
import List from './components/List';
import Status from './components/Status';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/status/:gameNum' element={<Status/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
