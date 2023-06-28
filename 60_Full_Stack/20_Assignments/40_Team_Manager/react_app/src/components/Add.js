import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import Header from './Header';
import axios from 'axios';

const Add = () => {
    const[playerName, setPlayerName] = useState('');
    const[position, setPosition] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/players', {
            playerName: playerName,
            position: position,
            status:[
                {game: 1, status: 'undecided'},
                {game: 2, status: 'undecided'},
                {game: 3, status: 'undecided'}
            ]
        })
            .then( () => navigate('/'))
            .catch( err => console.log(err))
    }

    return(
        <div className='add'>
            <Header/>
            <div>
                <Link to='/'>Player List</Link>
                <span> | </span>
                <Link to='/add'>Add Player</Link>
            </div>
            <div className='add-section'>
                <h3>Add Player</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label>Player Name:</label>
                    <input type="text" onChange={ (e) => setPlayerName(e.target.value)}/>
                    </div>
                    <div>
                    <label>Player Postion:</label>
                    <input type="text" onChange={ (e) => setPosition(e.target.value)} />
                    </div>
                    <input type="submit" value='Add Player'/>
                </form>
            </div>
        </div>
    )
}

export default Add;