import dateFormat from "./js/dateFormat";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

(function() {
  let apiKey = "sl1hP0MUGkJLn8tw2qXsxb6235u91ndRBDuD0O2d";
  var date = dateFormat();
  fetch(
    "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
      date +
      "&end_date=" +
      date +
      "&detailed=true&api_key=" +
      apiKey
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      localStorage.setItem("asteroidId", data.near_earth_objects[date][0].id);
    });
})();

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("index")
);
