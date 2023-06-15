import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
      .then( response => {
        setPokeList(response.data.results);
      });
  }, []);

  return (
    <div className='App'>
      {pokeList.map((pokemon, index) => {
          return <p key={index}>{index}. {pokemon.name}</p>;
      })}
    </div>
  );
}

export default App;
