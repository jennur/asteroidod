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
    this.state = {
      showText: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  render() {
    return (
      <nav className="c-main-nav-wrapper">
        <ul
          className="c-main-nav"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/">
              <img className="c-main-nav__icon" src={sun} />
              {this.state.showText ? "Home" : null}
            </Link>
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/details">
              <img className="c-main-nav__icon" src={mercury} />
              {this.state.showText ? "Asteroid Details" : null}
            </Link>
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/approaching">
              <img className="c-main-nav__icon" src={venus} />
              {this.state.showText ? "Approaching Asteroids" : null}
            </Link>
          </li>
          <li className="c-main-nav__item">
            <Link
              className="c-main-nav__item--link"
              to="/asteroids-visited-by-aircrafts"
            >
              <img className="c-main-nav__icon" src={earth} />
              {this.state.showText ? "Asteroids visited by spacecrafts" : null}
            </Link>
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/about">
              <img className="c-main-nav__icon" src={jupiter} />
              {this.state.showText ? "About AsteroidOD" : null}
            </Link>
          </li>
          <li className="c-main-nav__item">
            <Link className="c-main-nav__item--link" to="/contact">
              <img className="c-main-nav__icon" src={mars} />
              {this.state.showText ? "Contact" : null}
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  componentDidMount() {
    this.props.isBurgerMenu ? this.setState({ showText: true }) : false;
  }
  handleMouseEnter() {
    this.setState({ showText: true });
  }
  handleMouseLeave() {
    this.setState({ showText: false });
  }
}

export default Navigation;
