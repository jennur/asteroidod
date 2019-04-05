import React from "react";
import Loading from "../components/Loading";
import AsteroidDataBlock from "../components/AsteroidDataBlock";
import AccordionSection from "../components/AccordionSection";
import formatNumber from "../js/formatNumber";

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
    let closeApproachData = this.state.isLoaded
      ? this.renderCloseApproachDates()
      : "";
    return (
      <main>
        {details}
        {closeApproachData}
      </main>
    );
  }
  renderDetails() {
    let asteroid = this.state;
    return (
      <section className="asteroid__details">
        <h2>Asteroid Details</h2>
        <AsteroidDataBlock
          transparent={false}
          asteroidName={asteroid.asteroidName}
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
        />
      </section>
    );
  }
  renderCloseApproachDates() {
    let closeApproachData = this.state.closeApproachData;

    let accordionSections = [];

    closeApproachData.forEach((element, key) => {
      accordionSections.push(this.renderAccordionSections(element, key));
    });

    return (
      <section className="content-container">
        <h2>{closeApproachData.length} known close approach dates </h2>
        <div className="accordion">{accordionSections}</div>
      </section>
    );
  }
  renderAccordionSections(element, key) {
    let kilometersPerHour = formatNumber(
      element.relative_velocity.kilometers_per_hour
    );
    let kilometersPerSecond = formatNumber(
      element.relative_velocity.kilometers_per_second
    );
    let milesPerHour = formatNumber(element.relative_velocity.miles_per_hour);
    let missDistanceAstronomical = formatNumber(
      element.miss_distance.astronomical
    );
    let missDistanceLunar = formatNumber(element.miss_distance.lunar);
    let missDistanceKilometers = formatNumber(element.miss_distance.kilometers);
    let missDistanceMiles = formatNumber(element.miss_distance.miles);

    return (
      <AccordionSection key={key} title={element.close_approach_date}>
        <AsteroidDataBlock
          transparent={true}
          orbitingBody={element.orbiting_body}
          relativeVelocity={{
            kmPerHour: kilometersPerHour,
            kmPerSecond: kilometersPerSecond,
            milesPerHour: milesPerHour
          }}
          missDistance={{
            astronomical: missDistanceAstronomical,
            lunar: missDistanceLunar,
            kilometers: missDistanceKilometers,
            miles: missDistanceMiles
          }}
        />
      </AccordionSection>
    );
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
        let closeApproachData = asteroid.close_approach_data;
        this.setState({
          closeApproachData: closeApproachData,
          asteroidName: asteroid.name,
          absoluteMagnitude: asteroid.absolute_magnitude_h,
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

          isLoaded: true
        });
      });
  }
}

export default Details;
