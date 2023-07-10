import {useState, useEffect} from 'react'
import axios from 'axios'

const DisplayList = () => {
    const [athleteList, setAthleteList] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/athletes')
            .then( res => {
                console.log(res.data)
                setAthleteList(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <h2>Athlete List</h2>
                {
                    athleteList.map( (athlete, index) => (
                        <div key={index}
                        className='athlete'>
                            <p>{athlete.firstName} {athlete.lastName}</p>
                        </div>
                    ))
                }
        </div>
    )
}

export default DisplayList;