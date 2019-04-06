import React from "react";
import BurgerMenu from "./BurgerMenu";

class Header extends React.Component {
  render() {
    return (
      <div className="header-content-space">
        <div className="header-wrapper">
          <header className="header">
            <h1 className="header__headline">Asteroid of the Day</h1>
            <BurgerMenu />
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
