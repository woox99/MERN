import {Link} from 'react-router-dom';

const DisplayName = (props) => {

    return (
        <div>
            <h1>Hello {props.name}!</h1>
            <Link to='/'>Back To Survey</Link>
        </div>
    );
}

export default DisplayName;