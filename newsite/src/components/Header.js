import React from "react";
import BurgerMenu from "./BurgerMenu";

class Header extends React.Component {
  render() {
    return (
      <header className="header flex-wrap">
        <BurgerMenu />
        <h1 className="header__headline">Asteroid of the Day</h1>
      </header>
    );
  }
}

export default Header;
