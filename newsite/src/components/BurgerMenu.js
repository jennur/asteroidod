import React from "react";
import Navigation from "./Navigation";

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderNav = this.renderNav.bind(this);
  }
  render() {
    let navigation = this.renderNav();
    return (
      <div className="burger-menu">
        <div className="burger-menu__burger" onClick={this.handleClick}>
          <span />
          <span />
          <span />
        </div>
        {navigation}
      </div>
    );
  }
  renderNav() {
    return this.state.isClicked ? (
      <div className="burger-menu__navigation" onClick={this.handleClick}>
        <Navigation isBurgerMenu={true} />
      </div>
    ) : null;
  }
  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }
}

export default BurgerMenu;
