# 🌦️ Weather App

A clean and simple weather app built using HTML, CSS, and JavaScript. It fetches real-time weather data using the OpenWeatherMap API and displays current temperature, weather conditions, humidity, and wind speed for any city.

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Current temperature in Celsius
- ☁️ Weather condition description
- 💧 Humidity level
- 🌬️ Wind speed
- 🎯 Loading state and error handling
- ⌨️ Press Enter or click Search to fetch weather
- ⚙️ Uses `async/await` and `fetch` API

## 🌐 Live Demo

👉 [Try the Weather App](https://weather-app-sigma-dusky-46.vercel.app/)

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)

## 📦 How to Use Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/harshwardhan-d/Weather-app.git
   cd Weather-app
   ```
2. Open the `script.js` file and replace the existing API key inside the fetch URL with your own key from [OpenWeatherMap](https://openweathermap.org/api):
   ```javascript
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=YOUR_API_KEY&units=metric`)
   ```
3. Launch the app by opening `index.html` in your browser. You can do this by double-clicking the file or running:
   ```bash
   start index.html
   ```

## 📁 Folder Structure

```
Weather-app/
├── index.html
├── script.js
└── style.css (if separated, or inline in HTML)
```

## 🙌 Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/api)
- Deployed via [Vercel](https://vercel.com)

## 👨‍💻 Author

- **Harshwardhan Dhaneliya**  
  [GitHub](https://github.com/harshwardhan-d)  
  [LinkedIn](https://www.linkedin.com/in/harshwardhan-dhaneliya-8642b4326/)
