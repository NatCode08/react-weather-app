import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ search: false });

  function handleResponse(response) {
    setWeatherData({
      search: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: "Monday, 11 april 2022",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: "http://openweathermap.org/img/wn/01d@2x.png",
    });
  }

  if (weatherData.search) {
    return (
      <div className="Weather">
        <div className="LocalTime">18:42 Is your local time</div>
        <div className="LocalWeather">Local weather</div>

        <form className="SearchBar">
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
              />
            </div>
            <div className="col-2 ">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-80"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-8">
            <h1>
              {weatherData.description} in {weatherData.city}
            </h1>
            <img src={weatherData.icon} alt={weatherData.description} />
            <div className="Date">{weatherData.date}</div>
          </div>
          <div className="col-4">
            <div className="degrees">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                {" "}
                <a href="/" alt="Celsius">
                  ºC
                </a>{" "}
                |{" "}
                <a href="/" alt="Fahreinheit">
                  {" "}
                  ºF{" "}
                </a>{" "}
              </span>
            </div>
            <ul>
              <li>Humidity {weatherData.humidity}%</li>
              <li>Wind {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c089bdb5f7d0e706e5fbd9cda99f77bc";
    let city = "Madrid";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "searching...";
  }
}
