const backgroundContainer = document.getElementById("background");

export default function backgroundDisplay() {
  const currentUrl = window.location.href.split("#")[1];
  let backgroundUrl = "";

  switch (currentUrl) {
    case "/":
      backgroundUrl =
        "../../assets/asteroidImages/potentially-hazardous-asteroids.jpg";
      break;

    case "/details":
      backgroundUrl = "../assets/asteroidImages/ida-and-dactyl-galileo.jpg";
      break;

    case "/approaching":
      backgroundUrl = "../assets/asteroidImages/the-snowman-vesta.jpg";
      break;

    case "/asteroids-visited-by-aircrafts":
      backgroundUrl = "../assets/asteroidImages/ceres-juling-crater-dawn.jpg";
      break;

    case "/about":
      backgroundUrl = "../assets/asteroidImages/ceres-craters-dawn.jpg";
      break;

    case "/contact":
      backgroundUrl =
        "../assets/asteroidImages/hubble-telescope-earth-horizon.jpg";
      break;

    default:
      backgroundUrl = "../assets/asteroidImages/ceres-juling-crater-dawn.jpg";
      break;
  }

  backgroundContainer.style.backgroundImage = "url(" + backgroundUrl + ")";
  console.log(backgroundUrl);
}
