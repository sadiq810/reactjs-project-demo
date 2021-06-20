import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/"><span>PROGRAMS</span></Link>
            </li>
            <li>
                <Link to="/member-benefit"><span>MEMBER BENEFITS</span></Link>
            </li>
            <li>
                <Link to="/find-program"><span>FIND PROGRAM</span></Link>
            </li>
            <li>
                <Link to="/about"><span>ABOUT </span></Link>
            </li>
        </ul>
    );
}

export default Navigation;
