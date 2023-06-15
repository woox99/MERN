import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
      .then( response => response.json())
      .then( response => {
        setPokeList(response.results)
      })
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
