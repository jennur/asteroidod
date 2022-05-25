import React from "react";
import ReactHtmlParser from "react-html-parser";
import asteroidsJson from "../json/asteroidsVisitedBySpacecraft.json";
import Loading from "../components/Loading";
import Asteroid from "../components/Asteroid";

class AsteroidsVisitedBySpacecrafts extends React.Component {
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
      <section className="asteroids-visited-by-spacecrafts">
        <h2 className="asteroids-visited-by-spacecrafts__headline">
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
    this.setState({ asteroids: data.AsteroidsVisitedBySpacecrafts }, () => {
      this.state.asteroids
        ? this.setState({ jsonIsLoaded: true })
        : this.setState({ jsonIsLoaded: false });
    });
  }
}

export default AsteroidsVisitedBySpacecrafts;
