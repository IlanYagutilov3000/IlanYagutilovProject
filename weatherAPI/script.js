const quary = document.querySelector("#inputCity");
const button = document.querySelector("button");
const cityName = document.querySelector("#city");
const weatherIcon = document.querySelector("#weatherIcon");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const errorMessage = document.querySelector("#errorMessage");

async function getWeather(city) {
    if (city) {
        try {
            const response = await fetch(URL + city);
            const data = await response.json();
            displayWeather(data)
        } catch (error) {
            console.log((Error("something went wrong", error)));
        }

    }
}

function displayWeather(weatherData) {
    if (weatherData.cod === 200) {
        errorMessage.textContent = "";
        cityName.textContent = weatherData.name;
        temperature.textContent = weatherData.main.temp + "°";
        description.textContent = weatherData.weather[0].description;
        weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

    } else {
        cityName.textContent = "";
        temperature.textContent = "";
        description.textContent = "";
        weatherIcon.src = "";
        errorMessage.textContent = weatherData.message;
    }

}

button.addEventListener("click", () => {
    getWeather(quary.value)
})
