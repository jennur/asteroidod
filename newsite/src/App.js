import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./css/main.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import AsteroidsVisitedBySpacecrafts from "./pages/AsteroidsVisitedBySpacecrafts";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import Approaching from "./pages/Approaching";
import stickyHeader from "./js/stickyHeader";

import { HashRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation isBurgerMenu={false} />
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/approaching" component={Approaching} />
            <Route
              exact
              path="/asteroids-visited-by-spacecrafts"
              component={AsteroidsVisitedBySpacecrafts}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Page404} />
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    stickyHeader();
  }
}

export default App;
