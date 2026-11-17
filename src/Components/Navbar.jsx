import { NavLink } from 'react-router';
import './navbar.css';
const Navbar = () => {
    return (
        <div className="nav">
            <h1>Logo</h1>

            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/Contacts">Contacts</NavLink>
                </li>
                <li>
                    <NavLink to="/Projects">Projects</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;