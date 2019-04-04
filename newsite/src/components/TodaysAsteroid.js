import React from "react";

class TodaysAsteroid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todays-asteroid-wrapper">
        <div className="todays-asteroid">
          <h2 className="todays-asteroid__name">{this.props.asteroidName}</h2>
          <ul className="todays-asteroid__details">
            <li>Approach date: {this.props.approachDate}</li>
            <li>
              Miss distance
              <ul>
                <li>Astronomical ~ {this.props.missDistanceAstronomical}</li>
                <li>Lunar ~ {this.props.missDistanceLunar}</li>
                <li>Kilometers ~ {this.props.missDistanceKilometers}</li>
                <li>Miles ~ {this.props.missDistanceMiles}</li>
              </ul>
            </li>
            <li>
              Estimated diameter
              <ul>
                <li>
                  Meters
                  <ul>
                    <li>Max ~ {this.props.diameterMetersMax}</li>
                    <li>Min ~ {this.props.diameterMetersMin}</li>
                  </ul>
                </li>
                <li>
                  Feet
                  <ul>
                    <li>Max ~ {this.props.diameterFeetMax}</li>
                    <li>Min ~ {this.props.diameterFeetMin}</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TodaysAsteroid;
