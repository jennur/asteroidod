import React from "react";
import Loading from '../components/Loading';
import TextBox from '../components/TextBox';
import apiCall from '../js/pullContent';

class Details extends React.Component{
  constructor(props){
    super(props);
    apiCall();
  }
  render(){
    const asteroid = JSON.parse(localStorage.getItem('NEOs'))[localStorage.getItem('date')][0];
    return(
    <main>
      <h2>Asteroid Details</h2>
      <TextBox headline={`Name: ${asteroid.name}`} color="black">
        <h4>Estimated diameter</h4>
        Max ~ { Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max) } m
        <br/>
        Min ~ { Math.round(asteroid.estimated_diameter.meters.estimated_diameter_min) } m

        <h4>Miss distance</h4>
        ~ { Math.round(asteroid.close_approach_data[0].miss_distance.kilometers)} km
        <br/>
        ~ { Math.round(asteroid.close_approach_data[0].miss_distance.lunar)} lunar
        <br/>
        ~ { Math.round(asteroid.close_approach_data[0].miss_distance.astronomical*100)/100} AU
      </TextBox>
    </main>
    );
  }
}

export default Details;