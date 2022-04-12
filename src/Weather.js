import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ search: false });
  const [city, setCity] = useState(props.city);
  function handleResponse(response) {
    setWeatherData({
      search: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = "c089bdb5f7d0e706e5fbd9cda99f77bc";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.search) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="SearchBar">
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                onChange={updateCity}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "searching...";
  }
}
