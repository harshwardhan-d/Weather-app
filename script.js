let inputBox = document.getElementById("Input")
let cityDisplay = document.getElementById("Name")
let tempBox = document.getElementById("Temp")
let humidityBox = document.getElementById("Humidity")
let windBox = document.getElementById("Wind")
let searchButton = document.getElementById("Btn")
let weatherCard = document.getElementById("Weather")

async function data(cityName) {
    try {
        let jsonData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e43c19fd6f91f405cc120e0b74bfaadc&units=metric`)
        let res = await jsonData.json()

        console.log(res);
        return {
            name: res.name,
            description: res.weather[0].description,
            temperature: res.main.temp,
            humidity: res.main.humidity,
            wind_speed: res.wind.speed

        };

    } catch (error) {
        console.log('error');
        console.log(error);
        

    }

}

async function display() {
    // weatherCard.textContent = "";
    let cityName = inputBox.value.trim();

   

    if (!cityName) {
      cityDisplay.textContent = "⚠️ Please enter a city name";
      tempBox.textContent = "";
      humidityBox.textContent = "";
      windBox.textContent = "";
      return;
    }
  
    cityDisplay.textContent = "⏳ Loading...";
    tempBox.textContent = "";
    humidityBox.textContent = "";
    windBox.textContent = "";


    let result = await data(cityName);
  

    if (result) {
        cityDisplay.textContent = `📍 ${result.name}`
    tempBox.textContent = `🌡️ ${result.temperature}°C | ☁️ ${result.description}`;
    humidityBox.textContent = `💧 Humidity: ${result.humidity}%`;
    windBox.textContent = `🌬️ Wind: ${result.wind_speed} m/s`;
    } else {
        cityDisplay.textContent = `❌ City not found`;
    tempBox.textContent = "";
    humidityBox.textContent = "";
    windBox.textContent = "";
    }

}

inputBox.addEventListener("keydown", (e) => { 
    if (e.key === "Enter") {
        display();
    }
 })