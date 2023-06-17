import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Form from './Form';


const Planet = props => {
    const { paramId } = useParams();
    const [planet, setPlanet] = useState('');

    useEffect( () => {
        fetch(`https://swapi.dev/api/planets/${paramId}`)
            .then(response => response.json())
            .then(response => {
                setPlanet(response);
                console.log(response);
            });
    }, [paramId]);

    return (
        <div className='App'>
            <Form initSelect='planet' initId={paramId}></Form>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate} cm</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Population: {planet.population}</p>
        </div>

    );
}

export default Planet;