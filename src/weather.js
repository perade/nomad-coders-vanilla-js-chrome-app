const weather = document.querySelector(".js-weather");
const API_KEY = "8614f041ac285f9fdcfc51bdbd6398b1";
const COORDS = "coords";

function getWeather (lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (res){
      return res.json();
    }).then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    })
  ;
}

function saveCoords (obj) {
  localStorage.setItem(COORDS, JSON.stringify(obj));
}

function handleGeoSuccess (position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError () {
  console.log("Can't access geolocation!");
}

function askForCoords () {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords () {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init () {
  loadCoords();
}

init();