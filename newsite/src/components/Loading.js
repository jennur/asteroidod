import React from 'react';
import loading from '../../assets/icons/loading.svg';


const Loading = () => {
  return(
      <div className="loading-wrapper">
      <img className="loading__icon" src={ loading } />
      <p>Loading...</p>
      </div>
  );
}

export default Loading;