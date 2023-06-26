import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const AuthorList = () => {
    const [authorList, setAuthorList] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors')
            .then( res => {
                setAuthorList(res.data);
            })
            .catch( err => console.log(err))
    }, [authorList])

    return (
        <div className='home'>
            <h1>Favorite Authors</h1>
            <div className="list-body">
            {
                authorList.map( (author, index) => 
                <div key={index} className='item'>
                    <p>{author.fName} {author.lName}</p>
                    {/* <span style={{width: '20px'}}> | </span> */}
                    <div>
                    <Link to={`/edit/${author._id}`}>Edit</Link>
                    <DeleteButton authorId={author._id}/>
                    </div>
                </div>
                )
            }
            </div>
            <Link to={'/create'}>Add Author</Link>
        </div>
    )
}

export default AuthorList;