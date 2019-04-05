import React from "react";
import BurgerMenu from "./BurgerMenu";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__headline">Asteroid of the Day</h1>
        <BurgerMenu />
      </header>
    );
  }
}

export default Header;
