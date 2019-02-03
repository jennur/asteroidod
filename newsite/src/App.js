import React from "react";
import Header from './components/Header';
import About from './components/About';
import Details from './components/Details';
import Approaching from './components/Approaching';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

const App = () => {

  return(
    <Router>
      <div>
        <Header/>
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