import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div>18:42 IS YOUR LOCAL TIME</div>
      <div>Local Weather</div>

      <form className="SearchBar">
        <div className="row">
          <div className="col-2">
            <input type="search" placeholder="Enter a city..." />
          </div>
          <div className="col-2">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Clear Sky in Madrid</h1>
      <img
        src="http://openweathermap.org/img/wn/01d@2x.png"
        alt="Weather icon"
      />
      <p>Friday, April 8 2022</p>
      <div>16º C|F </div>
      <ul>
        <li>Humidity 57%</li>
        <li>Wind 9 km/h</li>
      </ul>
    </div>
  );
}
