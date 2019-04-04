import React from "react";
import loading from "../../assets/icons/loading.svg";

class Loading extends React.Component {
  render() {
    return (
      <div className="loading-wrapper">
        <img className="loading__icon" src={loading} />
        <p>Loading...</p>
      </div>
    );
  }
}

export default Loading;
