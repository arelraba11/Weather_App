import React, { useState } from "react";

const API_BASE = "https://api.openweathermap.org/data/2.5/";
const API_KEY = process.env.REACT_APP_WEATHER_KEY

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const search = async (evt) => {
    if (evt.key !== "Enter") return;

    try {
      const res = await fetch(
        `${API_BASE}weather?q=${encodeURIComponent(query)}&units=metric&appid=${API_KEY}`
      );
      const result = await res.json();

      if (result.cod !== 200) {
        setError(result.message);
        setWeather(null);
        return;
      }

      setWeather(result);
      setError("");
      setQuery("");
    } catch (err) {
      setError("Failed to fetch data");
      setWeather(null);
    }
  };

  const dateBuilder = (d) => {
    const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];
    const days = [
      "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ];

    return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  return (
    <div className={`app ${weather?.main?.temp > 16 ? "warm" : ""}`}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search city..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          />
        </div>

        {error && <div className="error">{error}</div>}

        {weather && (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;