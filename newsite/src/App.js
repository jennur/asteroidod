import React from "react";
import Header from './components/Header';
import Navigation from './components/Navigation';

import About from './components/About';
import Details from './components/Details';
import Approaching from './components/Approaching';



import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom'

const App = () => {

  return(
    <Router>
      <div>
        <Header/>
        <Navigation/>
        <Switch>
          <Route path="/about" component={ About }/>
          <Route path="/details" component={ Details }/>
          <Route path="/approaching" component={ Approaching }/>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App; 