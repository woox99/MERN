import {Link} from 'react-router-dom';

const Header = () => {

    return(
        <div className='header'>
                <Link to='/'>Manage Players</Link>
                <span> | </span>
                <Link to='/status1'>Manage Player Status</Link>
        </div>
    )
}

export default Header;