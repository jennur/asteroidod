import React from "react";

class AsteroidDataBlock extends React.Component {
  constructor(props) {
    super(props);
    this.renderName = this.renderName.bind(this);
    this.renderApproachDate = this.renderApproachDate.bind(this);
    this.renderMissDistance = this.renderMissDistance.bind(this);
    this.renderDiameter = this.renderDiameter.bind(this);
  }
  render() {
    let asteroidName = this.props.asteroidName ? this.renderName() : null;
    let approachDate = this.props.approachDate
      ? this.renderApproachDate()
      : null;

    let missDistance = this.props.missDistance
      ? this.renderMissDistance()
      : null;
    let diameter = this.props.diameter ? this.renderDiameter() : null;

    return (
      <div
        className={
          "todays-asteroid-wrapper " +
          (this.props.transparent
            ? "todays-asteroid-wrapper--transparent"
            : "todays-asteroid-wrapper--blue")
        }
      >
        <div className="todays-asteroid">
          <ul className="todays-asteroid__details">
            {asteroidName}
            {approachDate}
            {missDistance}
            {diameter}
          </ul>
        </div>
      </div>
    );
  }
  renderName() {
    return (
      <li>
        Name of asteroid
        <span className="todays-asteroid__data">{this.props.asteroidName}</span>
      </li>
    );
  }
  renderApproachDate() {
    return (
      <li>
        Approach date
        <span className="todays-asteroid__data">{this.props.approachDate}</span>
      </li>
    );
  }
  renderMissDistance() {
    return (
      <li>
        Miss distance
        <span className="todays-asteroid__data">
          {this.props.missDistance.astronomical} AU
        </span>
        <span className="todays-asteroid__data">
          {this.props.missDistance.lunar} LD{" "}
        </span>
        <span className="todays-asteroid__data">
          {this.props.missDistance.kilometers} km
        </span>
        <span className="todays-asteroid__data">
          {this.props.missDistance.miles} miles
        </span>
      </li>
    );
  }
  renderDiameter() {
    return (
      <li>
        Diameter (min/max)
        <span className="todays-asteroid__data">
          {this.props.diameter.meters.min} m / {this.props.diameter.meters.max}{" "}
          m
        </span>
        <span className="todays-asteroid__data">
          {this.props.diameter.feet.min} ft / {this.props.diameter.feet.max} ft
        </span>
      </li>
    );
  }
}

export default AsteroidDataBlock;
