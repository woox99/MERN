import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {

const Home = (props) => {
  return (
    <div>
        <h1 style={{color:'red'}}>Home Page</h1>
        <Link to={'/about'}>Go to About</Link>
      </div>
    );
  }
  
  const About = (props) => {
    return (
      <div>
        <h1 style={{color:'blue'}}>About Page</h1>
        <Link to={'/'}>Go to Home</Link>
      </div>
    );
  }
  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
