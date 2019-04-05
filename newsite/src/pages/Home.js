import React from "react";
import dateFormat from "../js/dateFormat";
import formatNumber from "../js/formatNumber";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import AsteroidDataBlock from "../components/AsteroidDataBlock";

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
    let loading = (
      <main>
        <Loading />
      </main>
    );
    let content = this.state.isLoaded ? this.renderContent() : loading;
    return content;
  }
  renderContent() {
    let asteroid = this.state;

    return (
      <main>
        <AsteroidDataBlock
          transparent={true}
          asteroidName={asteroid.asteroidName}
          approachDate={asteroid.approachDate}
          absoluteMagnitude={asteroid.absoluteMagnitude}
          diameter={{
            meters: {
              max: asteroid.diameter.meters.max,
              min: asteroid.diameter.meters.min
            },
            feet: {
              max: asteroid.diameter.feet.max,
              min: asteroid.diameter.feet.min
            }
          }}
          missDistance={{
            astronomical: asteroid.missDistance.astronomical,
            lunar: asteroid.missDistance.lunar,
            kilometers: asteroid.missDistance.kilometers,
            miles: asteroid.missDistance.miles
          }}
        />
        <div className="align-center ">
          <span className="button">
            <Link to="/details">See all close approach dates</Link>
          </span>

          <h2>
            <Link to="/approaching">
              There are
              {" " + asteroid.numNeos + " "}
              more near asteroids atm >
            </Link>
          </h2>
        </div>
      </main>
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
          absoluteMagnitude: asteroid.absolute_magnitude_h,
          diameter: {
            meters: {
              max: formatNumber(
                asteroid.estimated_diameter.meters.estimated_diameter_max
              ),
              min: formatNumber(
                asteroid.estimated_diameter.meters.estimated_diameter_min
              )
            },
            feet: {
              max: formatNumber(
                asteroid.estimated_diameter.feet.estimated_diameter_max
              ),
              min: formatNumber(
                asteroid.estimated_diameter.feet.estimated_diameter_min
              )
            }
          },
          missDistance: {
            astronomical: formatNumber(
              closeApproachData.miss_distance.astronomical
            ),
            lunar: formatNumber(closeApproachData.miss_distance.lunar),
            kilometers: formatNumber(
              closeApproachData.miss_distance.kilometers
            ),
            miles: formatNumber(closeApproachData.miss_distance.miles)
          },
          isLoaded: true
        });
      });
  }
}

export default Home;
