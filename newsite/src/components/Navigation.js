import React from "react";
import { Link } from "react-router-dom";
import sun from "../../assets/icons/sun.svg";
import mercury from "../../assets/icons/mercury.svg";
import venus from "../../assets/icons/venus.svg";
import earth from "../../assets/icons/earth.svg";
import mars from "../../assets/icons/mars.svg";
import jupiter from "../../assets/icons/jupiter.svg";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.props.isBurgerMenu;
  }
  render() {
    return (
      <nav className="c-main-nav-wrapper">
        <ul className="c-main-nav">
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/">
              <img className="c-main-nav__icon" src={sun} />
            </Link>
            {this.props.isBurgerMenu ? "Home" : null}
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/details">
              <img className="c-main-nav__icon" src={mercury} />
            </Link>
            {this.props.isBurgerMenu ? "Asteroid Details" : null}
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/approaching">
              <img className="c-main-nav__icon" src={venus} />
            </Link>
            {this.props.isBurgerMenu ? "Approaching Asteroids" : null}
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/well-known-asteroids">
              <img className="c-main-nav__icon" src={earth} />
            </Link>
            {this.props.isBurgerMenu ? "Well Known Asteroids" : null}
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/about">
              <img className="c-main-nav__icon" src={jupiter} />
            </Link>
            {this.props.isBurgerMenu ? "About AsteroidOD" : null}
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/contact">
              <img className="c-main-nav__icon" src={mars} />
            </Link>
            {this.props.isBurgerMenu ? "Contact" : null}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
