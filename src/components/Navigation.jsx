import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/"><span>Products</span></Link>
            </li>
            <li>
                <Link to="/member-benefit"><span>Member Benifits</span></Link>
            </li>
            <li>
                <Link to="/find-program"><span>Find Program</span></Link>
            </li>
            <li>
                <Link to="/about"><span>About </span></Link>
            </li>
        </ul>
    );
}

export default Navigation;
