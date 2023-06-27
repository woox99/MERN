import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Status = () => {
    const [playerStats, setPlayerStats] = useState([]);

    const getGameStatus = gameNum => {
        axios.get('http://localhost:8000/api/status/' + gameNum)
            .then(stats => {
                setPlayerStats(stats.data);
                console.log(stats.data);
            })
            .catch(err => console.log(err))
    }

    const changeStatus = (playerId, gameNum, gameStatus) => {
        axios.put(`http://localhost:8000/api/status/${playerId}`,
            {
                game: gameNum,
                status: gameStatus
            }
            )
    }


    return (
        <div>
            <Header />
            <div>
                <button onClick={() => { getGameStatus(1) }}>Game 1</button>
                <span> | </span>
                <button>Game 2</button>
                <span> | </span>
                <button>Game 3</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        playerStats.map((player, index) => (
                            <tr key={index}>
                                <td>{player.playerName}</td>
                                <td>
                                    <button style={player.gameStatus === 'playing' ? { backgroundColor: 'green' } : null}
                                    onClick={ () => {changeStatus(player._id, player.gameNum, 'playing')}}>
                                        Playing
                                    </button>
                                    <button style={player.gameStatus === 'notplaying' ? { backgroundColor: 'red' } : null}>
                                        Not Playing
                                    </button>
                                    <button style={player.gameStatus === 'undecided' ? { backgroundColor: 'yellow' } : null}>
                                        Undecided
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Status;