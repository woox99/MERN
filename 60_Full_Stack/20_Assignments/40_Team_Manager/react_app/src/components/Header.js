import {Link} from 'react-router-dom';

const Header = () => {

    return(
        <div>
                <Link to='/'>Manage Players</Link>
                <span> | </span>
                <Link to='/status'>Manage Player Status</Link>
        </div>
    )
}

export default Header;