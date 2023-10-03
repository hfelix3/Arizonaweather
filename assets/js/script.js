var searchCity = document.getElementById("searchInput");
var searchbutton = document.getElementById("searchBtn");
var phoenix = document.getElementById('phx');
var marana = document.getElementById('mrn');
var tucson = document.getElementById('tus');


var currentCity = document.getElementById('currentCity');
var temperatureCurrent = document.getElementById('temperatureCurrent');
var windCurrent = document.getElementById('windCurrent');
var humidityCurrent = document.getElementById('humidityCurrent');
// var weatherIcon = document.getElementById('weatherIcon');

var dayOneTemp = document.getElementById('dayOneTemp');
vThreedayOneWind = document.getElementById('dayOneWind');
var dayOneHumidity = document.getElementById('dayOneHumidity');

var dayTwoTemp = document.getElementById('dayTwoTemp');
var dayTwoWind = document.getElementById('dayTwoWind');
var dayTwoHumidity = document.getElementById('dayTwoHumidity');

var dayThreeTemp = document.getElementById('dayThreeTemp');
var dayThreeWind = document.getElementById('dayThreeWind');
var dayThreeHumidity = document.getElementById('dayThreeHumidity');

var dayFourTemp = document.getElementById('dayFourTemp');
var dayFourWind = document.getElementById('dayFourWind');
var dayFourHumidity = document.getElementById('dayFourHumidity');

var dayFiveTemp = document.getElementById('dayFiveTemp');
var dayFiveWind = document.getElementById('dayFiveWind');
var dayFiveHumidity = document.getElementById('dayFiveHumidity');

function getCity() {
  var city = document.getElementById("searchInput").value;
  var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=e0a6d17778901d75ba7ea768df1145c2&q="+ city +"&units=imperial&lang=en";

  fetch(weatherUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    currentCity.textContent = data.city.name;
    temperatureCurrent.textContent = Math.round(data.list[0].main.temp)+` °F`;
    windCurrent.textContent = data.list[0].wind.speed+` mph`;
    humidityCurrent.textContent = data.list[0].main.humidity+` %`;
    // weatherIcon.textContent = data.list[0].weather[0].icon;
    dayOneTemp.textContent = Math.round(data.list[8].main.temp)+` °F`;
    dayOneWind.textContent = data.list[8].wind.speed+` mph`;
    dayOneHumidity.textContent = data.list[8].main.humidity+` %`;

    dayTwoTemp.textContent = Math.round(data.list[16].main.temp)+` °F`;
    dayTwoWind.textContent = data.list[16].wind.speed+` mph`;
    dayTwoHumidity.textContent = data.list[16].main.humidity+` %`;

    dayThreeTemp.textContent = Math.round(data.list[24].main.temp)+` °F`;
    dayThreeWind.textContent = data.list[24].wind.speed+` mph`;
    dayThreeHumidity.textContent = data.list[24].main.humidity+` %`;

    dayFourTemp.textContent = Math.round(data.list[32].main.temp)+` °F`;
    dayFourWind.textContent = data.list[32].wind.speed+` mph`;
    dayFourHumidity.textContent = data.list[32].main.humidity+` %`;

    dayFiveTemp.textContent = Math.round(data.list[39].main.temp)+` °F`;
    dayFiveWind.textContent = data.list[39].wind.speed+` mph`;
    dayFiveHumidity.textContent = data.list[39].main.humidity+` %`;
  });
    
}

function getFirstCity() {
  var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=e0a6d17778901d75ba7ea768df1145c2&units=imperial&lang=en&q=phoenix";

  fetch(weatherUrl)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log(data);
    currentCity.textContent = data.city.name;
    temperatureCurrent.textContent = Math.round(data.list[0].main.temp)+` °F`;
    windCurrent.textContent = data.list[0].wind.speed+` mph`;
    humidityCurrent.textContent = data.list[0].main.humidity+` %`;
    // weatherIcon.textContent = data.list[0].weather[0].icon;
    dayOneTemp.textContent = Math.round(data.list[8].main.temp)+` °F`;
    dayOneWind.textContent = data.list[8].wind.speed+` mph`;
    dayOneHumidity.textContent = data.list[8].main.humidity+` %`;

    dayTwoTemp.textContent = Math.round(data.list[16].main.temp)+` °F`;
    dayTwoWind.textContent = data.list[16].wind.speed+` mph`;
    dayTwoHumidity.textContent = data.list[16].main.humidity+` %`;

    dayThreeTemp.textContent = Math.round(data.list[24].main.temp)+` °F`;
    dayThreeWind.textContent = data.list[24].wind.speed+` mph`;
    dayThreeHumidity.textContent = data.list[24].main.humidity+` %`;

    dayFourTemp.textContent = Math.round(data.list[32].main.temp)+` °F`;
    dayFourWind.textContent = data.list[32].wind.speed+` mph`;
    dayFourHumidity.textContent = data.list[32].main.humidity+` %`;

    dayFiveTemp.textContent = Math.round(data.list[39].main.temp)+` °F`;
    dayFiveWind.textContent = data.list[39].wind.speed+` mph`;
    dayFiveHumidity.textContent = data.list[39].main.humidity+` %`;
  });
}

function getSecondCity() { 
  var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=e0a6d17778901d75ba7ea768df1145c2&units=imperial&lang=en&q=marana";

  fetch(weatherUrl)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log(data);
    currentCity.textContent = data.city.name;
    temperatureCurrent.textContent = Math.round(data.list[0].main.temp)+` °F`;
    windCurrent.textContent = data.list[0].wind.speed+` mph`;
    humidityCurrent.textContent = data.list[0].main.humidity+` %`;
    // weatherIcon.textContent = data.list[0].weather[0].icon;
    dayOneTemp.textContent = Math.round(data.list[8].main.temp)+` °F`;
    dayOneWind.textContent = data.list[8].wind.speed+` mph`;
    dayOneHumidity.textContent = data.list[8].main.humidity+` %`;

    dayTwoTemp.textContent = Math.round(data.list[16].main.temp)+` °F`;
    dayTwoWind.textContent = data.list[16].wind.speed+` mph`;
    dayTwoHumidity.textContent = data.list[16].main.humidity+` %`;

    dayThreeTemp.textContent = Math.round(data.list[24].main.temp)+` °F`;
    dayThreeWind.textContent = data.list[24].wind.speed+` mph`;
    dayThreeHumidity.textContent = data.list[24].main.humidity+` %`;

    dayFourTemp.textContent = Math.round(data.list[32].main.temp)+` °F`;
    dayFourWind.textContent = data.list[32].wind.speed+` mph`;
    dayFourHumidity.textContent = data.list[32].main.humidity+` %`;

    dayFiveTemp.textContent = Math.round(data.list[39].main.temp)+` °F`;
    dayFiveWind.textContent = data.list[39].wind.speed+` mph`;
    dayFiveHumidity.textContent = data.list[39].main.humidity+` %`;
  });
}

function getThirdCity() {
  var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=e0a6d17778901d75ba7ea768df1145c2&units=imperial&lang=en&q=tucson";

  fetch(weatherUrl)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log(data);
    currentCity.textContent = data.city.name;
    temperatureCurrent.textContent = Math.round(data.list[0].main.temp)+` °F`;
    windCurrent.textContent = data.list[0].wind.speed+` mph`;
    humidityCurrent.textContent = data.list[0].main.humidity+` %`;
    // weatherIcon.textContent = data.list[0].weather[0].icon;
    dayOneTemp.textContent = Math.round(data.list[8].main.temp)+` °F`;
    dayOneWind.textContent = data.list[8].wind.speed+` mph`;
    dayOneHumidity.textContent = data.list[8].main.humidity+` %`;

    dayTwoTemp.textContent = Math.round(data.list[16].main.temp)+` °F`;
    dayTwoWind.textContent = data.list[16].wind.speed+` mph`;
    dayTwoHumidity.textContent = data.list[16].main.humidity+` %`;

    dayThreeTemp.textContent = Math.round(data.list[24].main.temp)+` °F`;
    dayThreeWind.textContent = data.list[24].wind.speed+` mph`;
    dayThreeHumidity.textContent = data.list[24].main.humidity+` %`;

    dayFourTemp.textContent = Math.round(data.list[32].main.temp)+` °F`;
    dayFourWind.textContent = data.list[32].wind.speed+` mph`;
    dayFourHumidity.textContent = data.list[32].main.humidity+` %`;

    dayFiveTemp.textContent = Math.round(data.list[39].main.temp)+` °F`;
    dayFiveWind.textContent = data.list[39].wind.speed+` mph`;
    dayFiveHumidity.textContent = data.list[39].main.humidity+` %`;
  });  
}

searchbutton.addEventListener('click', (event) => {
  event.preventDefault();
    getCity();
  });

  phoenix.addEventListener('click', () => {
    getFirstCity(); 
  });

  marana.addEventListener('click', () => {
    getSecondCity(); 
  });

  tucson.addEventListener('click', () => {
    getThirdCity(); 
  });

// should i add this for loop?
// for (var i = 0; i < data.list.length; i++) {