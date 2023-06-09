import logo from './logo.svg';
import './App.css';
// Import header.js function
import PersonCard from './components/header';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={'Jane'} lastName={'Doe'} age={'45'} hairColo={'black'}></PersonCard>
      <PersonCard firstName={'Smith'} lastName={'John'} age={'88'} hairColo={'brown'}></PersonCard>
      <PersonCard firstName={'Fillmore'} lastName={'Millard'} age={'50'} hairColo={'borwn'}></PersonCard>
      <PersonCard firstName={'Smith'} lastName={'Smith'} age={'62'} hairColo={'borwn'}></PersonCard>
    </div>
  );
}

export default App;
