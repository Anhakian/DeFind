import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <ul className='all-nav-button'>
                    <li className='title'><Link to="/"><h1><strong>DeFind</strong></h1></Link></li>
                    <ul className='nav-button'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contribute">Contribute to DeFind</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                    </ul>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar