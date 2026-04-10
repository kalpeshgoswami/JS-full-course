async function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.querySelector("h3");

    if (city === "") {
        result.innerText = "Please enter a city name.";
        return;
    }

    const apiKey = "bb7330f5efebe6b2bb437bda2aae65ea";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        const temperature = data.main.temp;
        const weather = data.weather[0].description;
        const cityName = data.name;
        const country = data.sys.country;

        result.innerHTML = `
             ${cityName}<br>
             Temperature: ${temperature}°C <br>
             weather: ${weather}
        `;
    } catch (error) {
        result.innerText = "Error: " + error.message;
    }
}