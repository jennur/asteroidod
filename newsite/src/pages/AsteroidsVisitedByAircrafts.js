import React from "react";
import ReactHtmlParser from "react-html-parser";
import asteroidsJson from "../json/asteroidsVisitedByAirCraft.json";
import Loading from "../components/Loading";
import Asteroid from "../components/Asteroid";
import ceres from "../../assets/visitedAsteroids/ceres-dawn.jpg";
import eros from "../../assets/visitedAsteroids/eros-near.jpg";
import gaspra from "../../assets/visitedAsteroids/gaspra-galileo.jpg";
import ida from "../../assets/visitedAsteroids/ida-and-dactyl-galileo.jpg";
import lutetia from "../../assets/visitedAsteroids/lutetia-rosetta.jpg";
import mathilde from "../../assets/visitedAsteroids/mathilde-near.jpg";
import vesta from "../../assets/visitedAsteroids/vesta-dawn.jpg";

class AsteroidsVisitedByAircrafts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonIsLoaded: false,
      asteroids: []
    };
  }
  render() {
    let asteroidBlocks = this.state.jsonIsLoaded ? (
      this.renderContent()
    ) : (
      <Loading />
    );
    return <main>{asteroidBlocks}</main>;
  }
  renderContent() {
    let asteroids = this.state.asteroids;
    let asteroidContainers = [];
    let moreAsteroidsArray = [];
    asteroids.forEach((asteroid, key) => {
      let asteroidDescription = Array.prototype.join.call(
        asteroid.description,
        " "
      );
      if (asteroidDescription.length > 1) {
        asteroidContainers.push(
          <Asteroid
            wide={false}
            name={asteroid.name}
            imageUrl={asteroid.imageUrl}
            key={key}
          >
            {ReactHtmlParser(asteroidDescription)}
          </Asteroid>
        );
      } else {
        moreAsteroidsArray.push(asteroid.name);
      }
    });
    let moreAsteroidsString = Array.prototype.join.call(
      moreAsteroidsArray,
      " - "
    );
    return (
      <section className="asteroids-visited-by-aircrafts">
        <h2 className="asteroids-visited-by-aircrafts__headline">
          Asteroids visited by spacecrafts
        </h2>
        {asteroidContainers}
        <Asteroid wide={true} name="Other asteroids visited by spacecraft">
          {moreAsteroidsString}
        </Asteroid>
      </section>
    );
  }
  componentDidMount() {
    let data = JSON.parse(JSON.stringify(asteroidsJson));
    this.setState({ asteroids: data.asteroidsVisitedByAircrafts }, () => {
      this.state.asteroids
        ? this.setState({ jsonIsLoaded: true })
        : this.setState({ jsonIsLoaded: false });
    });
  }
}

export default AsteroidsVisitedByAircrafts;
