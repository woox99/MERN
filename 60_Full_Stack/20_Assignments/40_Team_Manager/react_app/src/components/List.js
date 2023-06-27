import {Link} from 'react-router-dom';
import Header from './Header';
import {useState, useEffect} from 'react';
import axios from 'axios'

const List = () => {
    const[playerList, setPlayerList] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayerList(res.data))
            .catch( err => console.log(err))
    }, [playerList]);

    const deletePlayer = playerId => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
    }
    
    return(
        <div>
            <Header/>
            <div>
                <Link to='/'>Player List</Link>
                <span> | </span>
                <Link to='/add'>Add Player</Link>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Postion</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    playerList.map( (player, index) => (
                        <tr key={index}>
                            <td>{player.playerName}</td>
                            <td>{player.position}</td>
                            <td><button onClick={ () => deletePlayer(player._id)}>Delete</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default List;