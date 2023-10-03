var searchCity = document.getElementById("searchInput")
var phoenix = document.getElementById('phx');
var marana = document.getElementById('mrn');
var tucson = document.getElementById('tus');


var currentCity = document.getElementById('currentCity');
var temperatureCurrent = document.getElementById('temperatureCurrent');
var windCurrent = document.getElementById('windCurrent');
var humidityCurrent = document.getElementById('humidityCurrent');
// var weatherIcon = document.getElementById('weatherIcon');

var dayOneTemp = document.getElementById('daOneTemp');
var dayOneWind = document.getElementById('dayOneWind');
var dayOneHumidity = document.getElementById('dayOneHumidity');

// var dayTwoTemp = document.getElementById('dayTwoTemp');
// var dayTwoWind = document.getElementById('dayTwoWind');
// var dayTwoHumidity = document.getElementById('dayTwoHumidity');

// var dayThreeTemp = document.getElementById('dayThreeTemp');
// var dayThreeWind = document.getElementById('dayThreeWind');
// var dayThreeHumidity = document.getElementById('dayThreeHumidity');

// var dayFourTemp = document.getElementById('dayFourTemp');
// var dayFourWind = document.getElementById('dayFourWind');
// var dayFourHumidity = document.getElementById('dayFourHumidity');

// var dayFiveTemp = document.getElementById('dayFiveTemp');
// var dayFiveWind = document.getElementById('dayFiveWind');
// var dayFiveHumidity = document.getElementById('dayFiveHumidity');

function getCity() {
  var searchCity = document.getElementById("searchInput").value;
  var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?&q="+ searchCity +"appid=e0a6d17778901d75ba7ea768df1145c2&units=imperial&lang=en";

  fetch(weatherUrl)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    currentCity.textContent = data.city.name;
    temperatureCurrent.textContent = Math.round(data.list[0].main.temp)+` °F`;
    windCurrent.textContent = data.list[0].wind.speed+` mph`;
    humidityCurrent.textContent = data.list[0].main.humidity+` %`;
    // weatherIcon.textContent = data.list[0].weather[0].icon;
    
  });
  
  
  
}

function getFirstCity() {
  var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=e0a6d17778901d75ba7ea768df1145c2&units=imperial&lang=en&q=phoenix";

  fetch(weatherUrl)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    currentCity.textContent = data.city.name;
    temperatureCurrent.textContent = Math.round(data.list[0].main.temp)+` °F`;
    windCurrent.textContent = data.list[0].wind.speed+` mph`;
    humidityCurrent.textContent = data.list[0].main.humidity+` %`;
    // weatherIcon.textContent = data.list[0].weather[0].icon;
  });
  
  
  
}

function getSecondCity() { 
  var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=e0a6d17778901d75ba7ea768df1145c2&units=imperial&lang=en&q=marana";

  fetch(weatherUrl)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    currentCity.textContent = data.city.name;
    temperatureCurrent.textContent = Math.round(data.list[0].main.temp)+` °F`;
    windCurrent.textContent = data.list[0].wind.speed+` mph`;
    humidityCurrent.textContent = data.list[0].main.humidity+` %`;
    // weatherIcon.textContent = data.list[0].weather[0].icon;
    
  });
  
  
  
}

function getThirdCity() {
  var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=e0a6d17778901d75ba7ea768df1145c2&units=imperial&lang=en&q=tucson";

  fetch(weatherUrl)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    currentCity.textContent = data.city.name;
    temperatureCurrent.textContent = Math.round(data.list[0].main.temp)+` °F`;
    windCurrent.textContent = data.list[0].wind.speed+` mph`;
    humidityCurrent.textContent = data.list[0].main.humidity+` %`;
    // weatherIcon.textContent = data.list[0].weather[0].icon;
    
  });
  
  
  
}

if (searchCity) {
  searchCity.addEventListener('click', () => {
    getCity();
  });
} 

if (phoenix) {
  phoenix.addEventListener('click', () => {
    getFirstCity(); 
  });
}

if (marana) {
  marana.addEventListener('click', () => {
    getSecondCity(); 
  });
}

if (tucson) {
  tucson.addEventListener('click', () => {
    getThirdCity(); 
  });
}

// should i add this for loop?
// for (var i = 0; i < data.list.length; i++) {