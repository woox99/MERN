import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = () => {
    const [personList, setPersonList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => {
                setPersonList(res.data)
            })
            .catch((err)=>console.log(err))
    }, [])
    
    const createPerson = (personParam) => {
        axios.post('http://localhost:8000/api/people', personParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setPersonList([...personList, res.data])
            })
            .catch((err)=>console.log(err))
    }

    const removeFromDom = personId => {
        axios.delete("http://localhost:8000/api/people/" + personId)
        .then( res=> {
            setPersonList(personList.filter(person => person._id !== personId));
        })
        
    }

    return (
        <div>
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
            <hr />
            <PersonList personList={personList} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;
