let now = new Date();
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Firday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let ampm = hours >= 12 ? "pm" : "am";
hours = hours % 12;
hours = hours ? hours : 12;
let todaysdate = document.querySelector("#todaysdate");
todaysdate.innerHTML = `${day} ${date}, </br>
${hours}:${minutes} ${ampm} `;

function searchcity(event) {
  event.preventDefault();
  let key = "6da49f4c9efbefcf042ac4b59c666478";
  let cityElement = document.querySelector("#citysearch").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityElement}&appid=${key}&units=metric`;
  axios.get(url).then(displayWeather);
}

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#main-weather").innerHTML = `${Math.round(
    response.data.main.temp
  )}º`;
  document.querySelector("#description").innerHTML = `It's ${
    response.data.weather[0].description
  }`;
}

function showPosition(position) {
  let key = "6da49f4c9efbefcf042ac4b59c666478";
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let form = document.querySelector("#citysearch-form");
form.addEventListener("submit", searchcity);

function degreesF() {
  let changeweather = document.querySelector(".weather");
  changeweather.innerHTML = `66º `;
}
function degreesC() {
  let changeweather = document.querySelector(".weather");
  changeweather.innerHTML = `25º `;
}
let farhrenheit = document.querySelector("#farhrenheit-link");
farhrenheit.addEventListener("click", degreesF);
let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", degreesC);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
