import React from "react";
import Loading from "../components/Loading";

class AsteroidsVisitedByAircrafts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let asteroidBlocks = this.state.isLoaded ? (
      this.renderContent()
    ) : (
      <Loading />
    );
    return <main>{asteroidBlocks}</main>;
  }
}

export default AsteroidsVisitedByAircrafts;
