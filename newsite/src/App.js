import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./css/main.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import Approaching from "./pages/Approaching";

import { HashRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Header />
            <Navigation isBurgerMenu={false} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/details" component={Details} />
              <Route exact path="/approaching" component={Approaching} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </div>
        </HashRouter>
      </div>
    );
  }
  componentDidMount() {}
}

export default App;
