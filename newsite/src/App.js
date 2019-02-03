import React from "react";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import About from './components/About';
import Details from './components/Details';
import Contact from './components/Contact';
import Approaching from './components/Approaching';
import Game from './components/Game';



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
        <div className="flex-wrap">
         <Navigation/>
         <Switch>
           <Route path="/about" component={ About }/>
           <Route path="/details" component={ Details }/>
           <Route path="/approaching" component={ Approaching }/>
           <Route path="/contact" component={ Contact }/>
           <Route path="/game" component={ Game }/>
         </Switch>
        </div>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App; 