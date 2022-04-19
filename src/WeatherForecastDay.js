import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="col">
      <div className="forecast">{day()} </div>
      <div>
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
      </div>
      <div className="ForecastTemperature">
        <span className="WeatherTemperature-max">{maxTemperature()}º</span>
        <span className="WeatherTemperature-min"> {minTemperature()}º</span>
      </div>
    </div>
  );
}
