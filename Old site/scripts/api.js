var apiKey = "sl1hP0MUGkJLn8tw2qXsxb6235u91ndRBDuD0O2d";

var date = new Date();
var startDate = dateFormat(date);

//var nextDate = new Date(date.getTime() + 7*24*60*60*1000);
var endDate = startDate;//dateFormat(nextDate);
console.log(startDate);

var loadIcon = document.getElementById('loading');
var request = new XMLHttpRequest(); //creating an HTTP request to connect to the API
request.open('GET', 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + startDate + '&end_date=' + endDate + '&detailed=true&api_key=' + apiKey, true);
//request.open('GET', 'https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=' + apiKey, true); //making asynchronous call to load JSON data
request.onload = function(){ //creating function to be called when content is loaded
  if(this.status >= 200 && this.status < 400){ //if the request was successful
    var data = JSON.parse(this.response); //assign loaded JSON content to variable
    console.log(data);
    loadIcon.style.display = "none";

    var asteroid = data["near_earth_objects"][startDate]["0"];
    var diameter, velocity, distance, absMagn, hazardous, missDist;


    var test = /\/asteroidod\/+.+/; //checking location to retrieve the right content
    if(window.location.href.match(test) === null || window.location.href.indexOf("index") !== -1){

      var asteroidName = document.getElementById('asteroid-name');
      asteroidName.innerHTML = data["near_earth_objects"][startDate]["0"]["name"];

      // APPEND CONTENT TO INDEX PAGE
      var details = document.getElementById('details-list');

      diameter = document.createElement('li');
      details.appendChild(diameter);
      diameter.innerHTML = "<b>Estimated diameter (min/max):</b><br/> " + (asteroid.estimated_diameter.meters.estimated_diameter_min).toFixed(2) + " m / "
      + (asteroid.estimated_diameter.meters.estimated_diameter_max).toFixed(2) + " m <br />"
      + (asteroid.estimated_diameter.feet.estimated_diameter_min).toFixed(2) + " ft / " + (asteroid.estimated_diameter.feet.estimated_diameter_max).toFixed(2) + " ft";

      velocity = document.createElement('li');
      details.append(velocity);
      velocity.innerHTML = "<b>Relative velocity:</b><br/> " + asteroid.close_approach_data["0"].relative_velocity.kilometers_per_hour + " km/h <br />"
      + asteroid.close_approach_data["0"].relative_velocity.miles_per_hour + " miles/h";

      distance = document.createElement('li');
      details.appendChild(distance);
      distance.innerHTML = "<b>Miss distance:</b><br/> " +
      asteroid.close_approach_data["0"].miss_distance.astronomical + " AU <br/>" +
      asteroid.close_approach_data["0"].miss_distance.lunar + " LD <br/>" +
      asteroid.close_approach_data["0"].miss_distance.kilometers + " km <br/>" +
      asteroid.close_approach_data["0"].miss_distance.miles + " miles";

      absMagn = document.createElement('li');
      details.appendChild(absMagn);
      absMagn.innerHTML = "<b>Asbolute magnitude:</b><br/> " + asteroid.absolute_magnitude_h + " H";

      hazardous = document.createElement('li');
      details.appendChild(hazardous);
      if(asteroid.is_potentially_hazardous_asteroid){
        hazardous.innerHTML = "<b>Potentially hazardous:</b><br/>Yes";
      }
      else{
        hazardous.innerHTML = "<b>Potentially hazardous:</b><br/>No";
      }
      // append content to index end
    }

    if(window.location.href.indexOf('asteroid-of-the-day') !== -1){
      var asteroidID = asteroid.neo_reference_id;
      console.log(asteroidID);
      var detailsRequest = new XMLHttpRequest();
      detailsRequest.open('GET', 'https://api.nasa.gov/neo/rest/v1/neo/' + asteroidID + '?api_key=' + apiKey, true);
      detailsRequest.onload = function(){ //creating function to be called when content is loaded
        if(this.status >= 200 && this.status < 400){
          var detailsData = JSON.parse(this.response);
          console.log(detailsData);
          loadIcon.style.display = "none";
          document.getElementById('timeline').style.display = "block";

          // APPEND CONTENT TO DETAILS PAGE
            document.getElementById('asteroid-details-name').innerHTML = detailsData['name'];
            var detailsList = document.getElementById('details');


            diameter = document.createElement('li');
            detailsList.appendChild(diameter);
            diameter.innerHTML = "<b>Estimated diameter (min/max):</b><br/> "
            + detailsData.estimated_diameter.meters.estimated_diameter_min + " m / "
            + detailsData.estimated_diameter.meters.estimated_diameter_max + " m <br/>"
            + detailsData.estimated_diameter.kilometers.estimated_diameter_min + " km / "
            + detailsData.estimated_diameter.kilometers.estimated_diameter_max + " km <br/>"
            + detailsData.estimated_diameter.feet.estimated_diameter_min + " ft / "
            + detailsData.estimated_diameter.feet.estimated_diameter_max + " ft <br/>"
            + detailsData.estimated_diameter.miles.estimated_diameter_min + " miles / "
            + detailsData.estimated_diameter.miles.estimated_diameter_max + " miles";

            absMagn = document.createElement('li');
            detailsList.appendChild(absMagn);
            absMagn.innerHTML = "<b>Absolute Magnitude: </b>" + detailsData.absolute_magnitude_h + " H";

            hazardous = document.createElement('li');
            detailsList.appendChild(hazardous);
            if(asteroid.is_potentially_hazardous_asteroid){
              hazardous.innerHTML = "<b>Potentially hazardous:</b> Yes";
            }
            else{
              hazardous.innerHTML = "<b>Potentially hazardous:</b> No";
            }

            var moreFacts = document.createElement('li');
            detailsList.appendChild(moreFacts);
            moreFacts.innerHTML = 'See all details, including orbital data, <a href="' + detailsData.nasa_jpl_url + '" target="_blank" title="Opens in new tab">here</a>';

            //Append content to timeline
            var timeline = document.getElementById('timeline');
            var closeApproach = detailsData.close_approach_data;
            var i;
            for(i = 0; i < closeApproach.length; i++){
              var close = document.createElement('li');
              close.innerHTML = "<h3 class='date'>" + closeApproach[i].close_approach_date + "<i class='toside'></i></h3>";

              var hiddenData = document.createElement('ul');
              hiddenData.classList.add('hide-robot');
              close.onclick = display;

              var orbitBody = document.createElement('li');
              orbitBody.innerHTML = "<b>Orbiting body:</b> " + closeApproach[i].orbiting_body;

              missDist = document.createElement('li');
              missDist.innerHTML = "<b>Miss distance:</b><br/> " +
              closeApproach[i].miss_distance.astronomical + " AU <br/>" +
              closeApproach[i].miss_distance.lunar + " LD <br/>" +
              closeApproach[i].miss_distance.kilometers + " km <br/>" +
              closeApproach[i].miss_distance.miles + " miles";

              velocity = document.createElement('li');
              velocity.innerHTML = "<b>Relative velocity:</b><br/>" +
              closeApproach[i].relative_velocity.kilometers_per_hour + " km/h<br/>" +
              closeApproach[i].relative_velocity.kilometers_per_second + " km/s<br/>" +
              closeApproach[i].relative_velocity.miles_per_hour + " miles/h";

              hiddenData.appendChild(orbitBody);
              hiddenData.appendChild(missDist);
              hiddenData.appendChild(velocity);
              close.appendChild(hiddenData);
              timeline.appendChild(close);
            }


          // append content details end
        }
        else{
          console.log('error. Request status: ' + detailsRequest.status);
          errorMsg();
        }
      }
      detailsRequest.send();

    }
    if(window.location.href.indexOf('discover') !== -1){
      var asteroids = data["near_earth_objects"][startDate];
      var asteroidsList = document.getElementById('asteroids-list');
      var count = document.createElement('li');
      asteroidsList.appendChild(count);
      count.innerHTML = "<b>Number of near earth objects today:</b> " + data['element_count'];

      //append content from API
      var i;
      for(i = 0; i < asteroids.length; i++){
        var listItem = document.createElement('li');
        var asteroidData = document.createElement('ul');
        var name = document.createElement('li');
        asteroidData.appendChild(name);
        name.innerHTML = "<h3>" + asteroids[i].name + "</h3>";

        diameter = document.createElement('li');
        asteroidData.appendChild(diameter);
        diameter.innerHTML = "<b>Estimated diameter (min/max):</b><br/> "
        + asteroids[i].estimated_diameter.meters.estimated_diameter_min + " m / "
        + asteroids[i].estimated_diameter.meters.estimated_diameter_max + " m <br />"
        + asteroids[i].estimated_diameter.feet.estimated_diameter_min + " ft / "
        + asteroids[i].estimated_diameter.feet.estimated_diameter_max + " ft";

        velocity = document.createElement('li');
        asteroidData.appendChild(velocity);
        velocity.innerHTML = "<b>Relative velocity:</b><br/> "
        + asteroids[i].close_approach_data["0"].relative_velocity.kilometers_per_hour + " km/h <br />"
        + asteroids[i].close_approach_data["0"].relative_velocity.miles_per_hour + " miles/h";

        distance = document.createElement('li');
        asteroidData.appendChild(distance);
        distance.innerHTML = "<b>Miss distance:</b><br/> " +
        asteroids[i].close_approach_data["0"].miss_distance.astronomical + " AU <br/>" +
        asteroids[i].close_approach_data["0"].miss_distance.lunar + " LD <br/>" +
        asteroids[i].close_approach_data["0"].miss_distance.kilometers + " km <br/>" +
        asteroids[i].close_approach_data["0"].miss_distance.miles + " miles";

        absMagn = document.createElement('li');
        asteroidData.appendChild(absMagn);
        absMagn.innerHTML = "<b>Asbolute magnitude:</b><br/> " + asteroids[i].absolute_magnitude_h + " H";

        hazardous = document.createElement('li');
        asteroidData.appendChild(hazardous);
        if(asteroids[i].is_potentially_hazardous_asteroid){
          hazardous.innerHTML = "<b>Potentially hazardous:</b><br/>Yes";
        }
        else{
          hazardous.innerHTML = "<b>Potentially hazardous:</b><br/>No";
        }
        listItem.appendChild(asteroidData);
        asteroidsList.appendChild(listItem);
      }
      //end append content
    }

  }
  else{
    console.log('error. Request status: ' + request.status); //error message to the console if request failed
    errorMsg();
  }
};
request.send();



//Function for giving the required date format
function dateFormat(date){
  var yyyy = date.getFullYear();

  var mm = date.getMonth() + 1;
  if(mm < 10){
    mm = '0' + mm;
  }

  var dd = date.getDate();
  if(dd < 10){
    dd = '0' + dd;
  }
return yyyy + '-' + mm + '-' + dd;
}

//Function for displaying content
function display(){
  if(this.childNodes[1].classList.contains('hide-robot')){
    this.childNodes[1].classList.remove('hide-robot');
  }
  else{
    this.childNodes[1].classList.add('hide-robot');
  }
}

// displaying error $message
function errorMsg(){
  document.getElementById('loadError').innerHTML = "<p>Content cannot load at the moment</p>";
  loadIcon.style.display = "none";
}
