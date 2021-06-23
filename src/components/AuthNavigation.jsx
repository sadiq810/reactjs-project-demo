import {Link} from 'react-router-dom';

const AuthNavigation = () => {
    return (
        <ul>
            <li>
                <Link to="/programs"><span>PROGRAMS</span></Link>
            </li>
            <li>
                <Link to="/my-profile"><span>PROFILE</span></Link>
            </li>
            <li>
                <Link to="/my-applications"><span>MY APPLICATION</span></Link>
            </li>
            <li>
                <Link to="/loans"><span>LOANS </span></Link>
            </li>
        </ul>
    );
}

export default AuthNavigation;
