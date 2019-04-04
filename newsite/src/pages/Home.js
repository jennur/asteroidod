import React from "react";
import dateFormat from "../js/dateFormat";
import TodaysAsteroid from "../components/TodaysAsteroid";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
    this.state = {
      isLoaded: false,
      numNeos: "",
      asteroidName: "",
      approachDate: "",
      absoluteMagnitude: "",
      diameter: {
        meters: {
          max: "",
          min: ""
        },
        feet: {
          max: "",
          min: ""
        }
      },
      missDistance: {
        astronomical: "",
        lunar: "",
        kilometers: "",
        miles: ""
      }
    };
  }
  render() {
    let loading = <Loading />;
    let content = this.state.isLoaded ? this.renderContent() : loading;
    return <main>{content}</main>;
  }
  renderContent() {
    let asteroid = this.state;

    return (
      <div>
        <TodaysAsteroid
          asteroidName={asteroid.asteroidName}
          approachDate={asteroid.approachDate}
          absoluteMagnitude={asteroid.absoluteMagnitude}
          diameterMetersMax={asteroid.diameter.meters.max}
          diameterMetersMin={asteroid.diameter.meters.max}
          diameterFeetMax={asteroid.diameter.feet.max}
          diameterFeetMin={asteroid.diameter.feet.min}
          missDistanceAstronomical={asteroid.missDistance.astronomical}
          missDistanceLunar={asteroid.missDistance.lunar}
          missDistanceKilometers={asteroid.missDistance.kilometers}
          missDistanceMiles={asteroid.missDistance.miles}
        />
        <Link to="/details">See all approach dates</Link>

        <h2>
          There are
          <span className="numNeos"> {asteroid.numNeos} </span>
          more near asteroids atm
        </h2>
      </div>
    );
  }
  componentDidMount() {
    var date = dateFormat();
    var apiKey = "sl1hP0MUGkJLn8tw2qXsxb6235u91ndRBDuD0O2d";

    fetch(
      "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
        date +
        "&end_date=" +
        date +
        "&detailed=true&api_key=" +
        apiKey
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let asteroid = data.near_earth_objects[date][0];
        let closeApproachData = asteroid.close_approach_data[0];

        this.setState({
          numNeos: data.element_count,
          asteroidName: asteroid.name,
          approachDate: closeApproachData.close_approach_date,
          absoluteMagnitude: Math.round(asteroid.absolute_magnitude_h),
          diameter: {
            meters: {
              max:
                Math.round(
                  asteroid.estimated_diameter.meters.estimated_diameter_max *
                    100
                ) / 100,
              min:
                Math.round(
                  asteroid.estimated_diameter.meters.estimated_diameter_min *
                    100
                ) / 100
            },
            feet: {
              max:
                Math.round(
                  asteroid.estimated_diameter.feet.estimated_diameter_max * 100
                ) / 100,
              min:
                Math.round(
                  asteroid.estimated_diameter.feet.estimated_diameter_min * 100
                ) / 100
            }
          },
          missDistance: {
            astronomical:
              Math.round(closeApproachData.miss_distance.astronomical * 100) /
              100,
            lunar:
              Math.round(closeApproachData.miss_distance.lunar * 100) / 100,
            kilometers: Math.round(closeApproachData.miss_distance.kilometers),
            miles: Math.round(closeApproachData.miss_distance.miles)
          },
          isLoaded: true
        });
        console.log(asteroid);
      });
  }
}

export default Home;
