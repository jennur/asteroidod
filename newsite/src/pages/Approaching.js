import React from "react";
import dateFormat from "../js/dateFormat";
import Loading from "../components/Loading";
import AsteroidDataBlock from "../components/AsteroidDataBlock";
import formatNumber from "../js/formatNumber";
import AccordionSection from "../components/AccordionSection";

class Approaching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      nearNeos: [],
      neos: []
    };
  }
  render() {
    let asteroidBlocks = this.state.isLoaded ? (
      this.renderContent()
    ) : (
      <Loading />
    );
    return <main>{asteroidBlocks}</main>;
  }
  renderContent() {
    let neos = this.state.neos;
    let accordionSection = [];
    neos.forEach((asteroid, key) => {
      let diameterMetersMax = formatNumber(
        asteroid.estimated_diameter.meters.estimated_diameter_max
      );
      let diameterMetersMin = formatNumber(
        asteroid.estimated_diameter.meters.estimated_diameter_min
      );
      let diameterFeetMax = formatNumber(
        asteroid.estimated_diameter.feet.estimated_diameter_max
      );
      let diameterFeetMin = formatNumber(
        asteroid.estimated_diameter.feet.estimated_diameter_min
      );
      let missDistanceAu = formatNumber(
        asteroid.close_approach_data[0].miss_distance.astronomical
      );
      let missDistanceLunar = formatNumber(
        asteroid.close_approach_data[0].miss_distance.lunar
      );
      let missDistanceKilometers = formatNumber(
        asteroid.close_approach_data[0].miss_distance.kilometers
      );
      let missDistanceMiles = formatNumber(
        asteroid.close_approach_data[0].miss_distance.miles
      );

      accordionSection.push(
        <AccordionSection title={asteroid.name} key={key}>
          <AsteroidDataBlock
            transparent={false}
            approachDate={asteroid.close_approach_data[0].close_approach_date}
            absoluteMagnitude={asteroid.absolute_magnitude_h}
            diameter={{
              meters: {
                max: diameterMetersMax,
                min: diameterMetersMin
              },
              feet: {
                max: diameterFeetMax,
                min: diameterFeetMin
              }
            }}
            missDistance={{
              astronomical: missDistanceAu,
              lunar: missDistanceLunar,
              kilometers: missDistanceKilometers,
              miles: missDistanceMiles
            }}
          />
        </AccordionSection>
      );
    });
    return (
      <section className="content-container">
        {" "}
        <h2>Todays approaching Asteroids</h2>
        {accordionSection}
      </section>
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
        let moreAsteroids = data.near_earth_objects[date];
        moreAsteroids.shift();

        this.setState({
          numNeos: data.element_count,
          neos: moreAsteroids,
          isLoaded: true
        });
      });
  }
}

export default Approaching;
