import potentiallyHazardousImage from "../../assets/asteroidImages/potentially-hazardous-asteroids.jpg";
import idaAndDactyl from "../../assets/asteroidImages/ida-and-dactyl-galileo.jpg";
import theSnowman from "../../assets/asteroidImages/the-snowman-vesta.jpg";
import ceresJulingCrater from "../../assets/asteroidImages/ceres-juling-crater-dawn.jpg";
import ceresCrater from "../../assets/asteroidImages/ceres-craters-dawn.jpg";
import hubble from "../../assets/asteroidImages/hubble-telescope-earth-horizon.jpg";

const backgroundContainer = document.getElementById("background");

export default function backgroundDisplay() {
  const currentUrl = window.location.href.split("#")[1];
  let backgroundUrl = "";

  switch (currentUrl) {
    case "/":
      backgroundUrl = potentiallyHazardousImage;
      break;

    case "/details":
      backgroundUrl = idaAndDactyl;
      break;

    case "/approaching":
      backgroundUrl = theSnowman;
      break;

    case "/asteroids-visited-by-aircrafts":
      backgroundUrl = ceresJulingCrater;
      break;

    case "/about":
      backgroundUrl = ceresCrater;
      break;

    case "/contact":
      backgroundUrl = hubble;
      break;

    default:
      backgroundUrl = ceresJulingCrater;
      break;
  }

  backgroundContainer.style.backgroundImage = "url(" + backgroundUrl + ")";
}
