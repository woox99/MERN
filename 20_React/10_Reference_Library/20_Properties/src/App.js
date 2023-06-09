import logo from './logo.svg';
import './App.css';
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <div>
        <Header firstName={"bill"} lastName={'Justice'}></Header>
      </div>
    </div>
  );
}

export default App;
