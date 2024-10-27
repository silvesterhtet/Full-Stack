import React from 'react'; //import React
import { BrowserRouter as Link } from 'react-router-dom'; // Import Link to navigate between pages
import './Navbar.css' // Import the CSS file for styling
import Home from '../../pages/Home/Home'
import NotHome from '../../pages/NotHome/NotHome'

const Navbar = () => {
    return (
        <nav className="navbar">
        <ul>
            <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/nothome">NotHome</Link>
            </li>
        </ul>
        </nav>
    );
  };
  
  // Always export your components so they can be imported in other files
  export default Navbar;