import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <h1>
            {props.data.description} in {props.data.city}
          </h1>
          <img src={props.data.icon} alt={props.data.description} />
          <div className="Date">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col-4">
          <div className="degrees">
            <span className="temperature">
              {Math.round(props.data.temperature)}
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
            <li>Humidity {props.data.humidity}%</li>
            <li>Wind {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
