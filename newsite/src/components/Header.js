import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return(
  <div>
    <h1>Asteroid of the Day</h1>
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/details">Details</Link></li>
        <li><Link to="/approaching">Approaching</Link></li>
      </ul>
    </nav>
  </div>
);
    }

export default Header; 