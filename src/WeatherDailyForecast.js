import React from "react";

export default function WeatherDailyForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast">Thu</div>
        </div>
        <img src={props.data.icon} alt={props.data.description} />
        <div className="ForecastTemperature">
          <span className="WeatherTemperture-max">19º</span>
          <span className="WeatherTemperture-min">10º</span>
        </div>
      </div>
    </div>
  );
}
