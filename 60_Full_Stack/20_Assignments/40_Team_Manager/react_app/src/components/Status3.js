import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Status3 = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(players => {
                setPlayers(players.data);
            })
            .catch(err => console.log(err))
    }, [players]);

    const changeStatus = (playerId, newStatus, gameNum) => {
        axios.put('http://localhost:8000/api/players/' + playerId,
        {
            $set: {
                [`status.${gameNum - 1}.status`]: newStatus
            }
        }
        )
            .then( res => null)
    }


    return (
        <div className='status'>
            <Header />
            <div>
                <Link to='/status1'>Game 1</Link>
                <span> | </span>
                <Link to='/status2'>Game 2</Link>
                <span> | </span>
                <Link to='/status3'>Game 3</Link>
            </div>
            <h3>Game 3</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.playerName}</td>
                                <td>
                                    <button style={player.status[2].status === 'playing' ? { backgroundColor: 'green' } : null}
                                        onClick={() => { changeStatus(player._id, 'playing', 3) }}>
                                        Playing
                                    </button>
                                    <button style={player.status[2].status === 'notplaying' ? { backgroundColor: 'red' } : null}
                                        onClick={() => { changeStatus(player._id, 'notplaying', 3) }}>
                                        Not Playing
                                    </button>
                                    <button style={player.status[2].status === 'undecided' ? { backgroundColor: 'yellow' } : null}
                                    onClick={() => { changeStatus(player._id, 'undecided', 3) }}>
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

export default Status3;