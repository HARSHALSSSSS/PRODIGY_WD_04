document.addEventListener('DOMContentLoaded', () => {
    const fetchWeatherBtn = document.getElementById('fetchWeatherBtn');
    const locationInput = document.getElementById('locationInput');
    const locationDisplay = document.getElementById('location');
    const temperatureDisplay = document.getElementById('temperature');
    const conditionsDisplay = document.getElementById('conditions');
    
    fetchWeatherBtn.addEventListener('click', () => {
        const location = locationInput.value.trim();
        if (location) {
            fetchWeather(location);
        } else {
            alert('Please enter a location');
        }
    });

    function fetchWeather(location) {
        const apiKey = '60f22cfcb9a58673c87863e333100daa';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayWeather(data);
                } else {
                    alert('Location not found');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data');
            });
    }

    function displayWeather(data) {
        const { name, main, weather } = data;
        locationDisplay.textContent = `Location: ${name}`;
        temperatureDisplay.textContent = `Temperature: ${main.temp}°C`;
        conditionsDisplay.textContent = `Conditions: ${weather[0].description}`;
    }
});
