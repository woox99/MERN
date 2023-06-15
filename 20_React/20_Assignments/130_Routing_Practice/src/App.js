import './App.css';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';

const Home = props => {
  return(
    <div>
        Welcome to the home page.
      </div>
    );
  }
  
  const DisplayMsg = props => {
    const {msg} = useParams();
    return(
        isNaN(+msg) ?
        <h1>The text is {msg}</h1>:
        <h1>The number is {msg}</h1>
      );
    }

  const StyleMsg = props => {
    const{msg, textColor, bgColor} = useParams();
    return(
      <h1 style={{
        backgroundColor: bgColor,
        color: textColor
      }}>{msg}</h1>
    );
  }
  
  function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/:msg' element={<DisplayMsg/>} />
        <Route path='/:msg/:textColor/:bgColor' element={<StyleMsg/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
