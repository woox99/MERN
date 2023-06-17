import { useState, useEffect, useMemo } from 'react';
import { useParams, Link} from 'react-router-dom';
import Form from './Form';


const People = props => {
    const { paramId } = useParams();
    const [person, setPerson] = useState('');
    const [homeworld, setHomeworld] = useState('');
    const [homeworldName, setHomeworldName] = useState('');

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${paramId}`)
            .then(response => { return response.json(); })
            .then(response => {
                setPerson(response);
                // extracts just the id number from the homeworld and sets homeworld as id
                setHomeworld(response.homeworld.match(/\d+/)[0]);
            })
    }, [paramId])

    // useMemo only triggers the render if the variable inside [] was changed
    // whereas useEffect triggers render if the state of the variable was changed
    useMemo(() => {
        if (homeworld) {
            fetch(`https://swapi.dev/api/planets/${homeworld}`)
                .then(response => response.json())
                .then(response => {
                    setHomeworldName(response.name);
                })
                .catch(error => {
                    console.error('Error fetching homeworld:', error);
                });
        }
    }, [homeworld]);

    useEffect( () => {
        console.log('home world name: ' + homeworldName);
    }, [homeworldName])

    return (
        <div className='App'>
            <Form initSelect='people' initId={paramId}></Form>
            <h1>{person.name}</h1>
            <p>height: {person.height} cm</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Eye Color: {person.eye_color}</p>
            <p>Skin Color: {person.skin_color}</p>
            <p>Homeworld:
            <Link to={`/planet/${homeworld}`}>{homeworldName}</Link>
            </p>
        </div>

    );
}

export default People;