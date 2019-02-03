import React from "react";
import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
      <nav>
        <ul class="c-main-nav">
          <li className="c-main-nav__item"><Link className="c-main-nav__item--link" to="/about">About</Link></li>
          <li className="c-main-nav__item"><Link className="c-main-nav__item--link" to="/details">Details</Link></li>
          <li className="c-main-nav__item"><Link className="c-main-nav__item--link" to="/approaching">Approaching</Link></li>
        </ul>
      </nav>
    );
}

export default Navigation;