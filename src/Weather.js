import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="LocalTime">18:42 Is your local time</div>
      <div className="LocalWeather">Local weather</div>

      <form className="SearchBar">
        <div className="row">
          <div className="col-10">
            <input type="search" placeholder="Enter a city..." autoFocus="on" />
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
          <h1>Clear Sky in Madrid</h1>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="Weather icon"
          />
          <div className="Date">Friday, April 8 2022</div>
        </div>
        <div className="col-4">
          <div className="degrees">
            <span className="temperature">16º </span>
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
            <li>Humidity 57%</li>
            <li>Wind 9 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
