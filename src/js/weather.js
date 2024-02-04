const API_KEY = "28014a92cff207f034632e7c555e9a63";
const weather = document.querySelector(".geolocation__weather");
const city = document.querySelector(".geolocation__user-postion");

function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${parseInt(data.main.temp)} ${String.fromCharCode(parseInt(2103, 16))} `;
    });
}

function onGeofail() {
  console.log("onGeofail");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeofail);