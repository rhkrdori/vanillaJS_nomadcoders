const API_KEY = "8c92b3b9b9282f4c69b8b842a1a8d59a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}, /${data.main.temp}`;
    });
}

function onGeoError() {
    alert("can't find you. no weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)