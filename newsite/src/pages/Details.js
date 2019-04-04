import React from "react";
import Loading from "../components/Loading";
import TodaysAsteroid from "../components/TodaysAsteroid";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.renderDetails = this.renderDetails.bind(this);
    this.state = {
      isLoaded: false,
      closeApproachData: [],
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
    let details = this.state.isLoaded ? this.renderDetails() : <Loading />;
    return (
      <main>
        <h2>Asteroid Details</h2>
        {details}
        <h2>Close Approach Dates</h2>
      </main>
    );
  }
  renderDetails() {
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
      </div>
    );
  }
  renderCloseApproachDates() {
    let closeApproachData = this.state.closeApproachData;
  }
  componentDidMount() {
    let apiKey = "sl1hP0MUGkJLn8tw2qXsxb6235u91ndRBDuD0O2d";
    let asteroidId = localStorage.getItem("asteroidId");
    const url =
      "https://api.nasa.gov/neo/rest/v1/neo/" +
      asteroidId +
      "?api_key=" +
      apiKey;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let asteroid = data;
        let closeApproachData = asteroid.close_approach_data[0];

        this.setState({
          closeApproachData: closeApproachData,
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
        console.log(closeApproachData);
      });
  }
}

export default Details;
