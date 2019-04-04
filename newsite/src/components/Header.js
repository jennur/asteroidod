import React from "react";
import BurgerMenu from "./BurgerMenu";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Asteroid of the Day</h1>
        <BurgerMenu />
      </header>
    );
  }
}

export default Header;
