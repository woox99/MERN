import { Link } from 'react-router-dom';
import Header from './Header';
import { useState, useEffect } from 'react';
import axios from 'axios'

const List = () => {
    const [playerList, setPlayerList] = useState([]);
    const [playerId, setPlayerId] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayerList(res.data))
            .catch(err => console.log(err))
    }, [playerList]);

    const deletePlayer = e => {
            axios.delete('http://localhost:8000/api/players/' + playerId);
            setShowPopup(false);
    }

    const popup = playerId => {
        setShowPopup(true);
        setPlayerId(playerId);
    }
    const cancel = () => {
        setShowPopup(false);
    }

    return (
        <div>
            <Header />
            <div>
                <Link to='/'>Player List</Link>
                <span> | </span>
                <Link to='/add'>Add Player</Link>
            </div>
            <div className='table-sect'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Postion</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            playerList.map((player, index) => (
                                <tr key={index}>
                                    <td>{player.playerName}</td>
                                    <td>{player.position}</td>
                                    <td><button onClick={() => {popup(player._id)}}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
            showPopup ? 
            <div className="popup">
                <p>Are sure you want to delete this player?</p>
                <button onClick={ (e) => {deletePlayer()}}>Yes</button>
                <button onClick={ () => {cancel()}}>No</button>
            </div>
            :null
            }
        </div>
    )
}

export default List;