import React from "react";
import apiCall from '../js/pullContent';

class Approaching extends React.Component{
  constructor(props){
    super(props);

    apiCall();
  }
  render(){
    return(
      <main>
        <div>
          <h2>Approaching Asteroids</h2>
        </div>
      </main>
    );
  }
}

export default Approaching;