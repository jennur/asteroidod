import React from "react";
import { Link } from 'react-router-dom'
import sun from '../../assets/icons/sun.svg';
import mercury from '../../assets/icons/mercury.svg';
import venus from '../../assets/icons/venus.svg';
import earth from '../../assets/icons/earth.svg';
import mars from '../../assets/icons/mars.svg';
import jupiter from '../../assets/icons/jupiter.svg';


const Navigation = () => {
    return(
      <nav className="c-main-nav-wrapper">
        <ul className="c-main-nav">
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/details">
              <img className="c-main-nav__icon" src={ sun }/>
            </Link>
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/approaching">
              <img className="c-main-nav__icon" src={ mercury }/>
            </Link>
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/what-are-asteroids">
              <img className="c-main-nav__icon" src={ venus }/>
            </Link>
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/game">
              <img className="c-main-nav__icon" src={ earth }/>
            </Link>
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/contact">
              <img className="c-main-nav__icon" src={ mars }/>
            </Link>
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/about">
              <img className="c-main-nav__icon" src={ jupiter }/>
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navigation;