import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <h1>
            {props.data.description} in {props.data.city}
          </h1>
          <WeatherIcon
            className="weatherIcon"
            code={props.data.icon}
            alt={props.data.description}
          />
          <div className="Date">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col-4">
          <WeatherTemperature celsius={props.data.temperature} />
          <ul>
            <li>Humidity {props.data.humidity}%</li>
            <li>Wind {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
