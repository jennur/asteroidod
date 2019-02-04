
export default function apiCall(){
  var date = new Date();
  var startDate = dateFormat(date);
  var endDate = startDate;//dateFormat(nextDate);

  localStorage.setItem('date',startDate);
  var apiKey = "sl1hP0MUGkJLn8tw2qXsxb6235u91ndRBDuD0O2d";
  
  // Using XHR for full support
  var request = new XMLHttpRequest();
  request.onload = function(){
      if(this.status >= 200 && this.status < 400){
        const data = JSON.parse(this.response);
        console.log(data);
        localStorage.setItem('numNEO', data.element_count);
        localStorage.setItem('NEOs', JSON.stringify(data.near_earth_objects));
      }
      else{
        console.log('Error ' + this.status);
      };
    }  
  request.open('GET', 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + startDate + '&end_date=' + endDate + '&detailed=true&api_key=' + apiKey, true);
  request.send();
}

function dateFormat(date){
  let yyyy = date.getFullYear();
  
  let mm = date.getMonth() + 1;
  if(mm < 10){
      mm = '0' + mm;
  }
  
  let dd = date.getDate();
  if(dd < 10){
      dd = '0' + dd;
  }
  return yyyy + '-' + mm + '-' + dd;
  }
  