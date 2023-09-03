function fetchWeatherData() {
    const apiKey = "523c89eb40114c77a23143738230906";
    const locationInput = document.getElementById("location-input");
    const cityNameElement = document.getElementById("city-name");
    const temperatureElement = document.getElementById("temperature");
    const weatherIconElement = document.getElementById("weather-icon");
    const weatherDescriptionElement = document.getElementById("weather-description");
    const humidityElement = document.getElementById("humidity");
    const windSpeedElement = document.getElementById("wind-speed");

    const location = locationInput.value;

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
      .then(response => response.json())
      .then(data => {
        // Update the HTML elements with the weather data
        cityNameElement.textContent = `Weather in ${data.location.name}`;
        temperatureElement.textContent = `${data.current.temp_c}°C`;
        weatherIconElement.src = data.current.condition.icon;
        weatherDescriptionElement.textContent = data.current.condition.text;
        humidityElement.textContent = `Humidity: ${data.current.humidity}%`;
        windSpeedElement.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
}
