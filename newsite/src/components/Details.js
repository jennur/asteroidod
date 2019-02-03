import React from "react";
import loading from '../../assets/icons/loading.svg';


const Details = () => {
    
    return(
    <main>
      <div>
          <h2>Asteroid Details</h2>
          <span className="loading-wrapper">
            <img className="loading__icon" src={ loading } />
            <p>Loading...</p>
          </span>
      </div>
    </main>
    );
}

export default Details;