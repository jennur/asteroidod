import React from "react";

class Asteroid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let image = this.props.imageUrl ? (
      <img
        className="visited-asteroid__image"
        src={this.props.imageUrl}
        alt={this.props.imageTitle}
      />
    ) : null;
    return (
      <div
        className={
          "visited-asteroid-wrapper " +
          (this.props.wide ? "visited-asteroid-wrapper--full-width" : "")
        }
      >
        <div className="visited-asteroid">
          <h3>{this.props.name}</h3>

          {image}

          <div className="visited-asteroid__text">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Asteroid;
