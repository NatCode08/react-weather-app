import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function icon() {
    let forecastIcon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

    return `${forecastIcon}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="forecast">{day()} </div>
      <div className="Forecast-icon">{icon()}</div>
      <div className="ForecastTemperature">
        <span className="WeatherTemperature-max">{maxTemperature()}º</span>
        <span className="WeatherTemperature-min"> {minTemperature()}º</span>
      </div>
    </div>
  );
}
