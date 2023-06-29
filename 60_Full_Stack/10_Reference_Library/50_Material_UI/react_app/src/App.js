import './App.css';
import {useState} from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from '@mui/material';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log("email: " + email)
  }

  return (
    <div className="App">
      <p>Buttons</p>
      <Button variant='text'>Button</Button>
      <Button variant='contained'>Contained Button</Button>
      <Button variant='outlined'>Outlined Button</Button>
      <hr />
      <p>Form</p>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" onChange={ e => {setEmail(e.target.value)}} />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          <input type="submit" value='Submit' />
        </FormControl>
      </form>

    </div>
  );
}

export default App;
