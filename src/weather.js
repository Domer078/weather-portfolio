import React from "react";
import "./WeatherInfo.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                autoFocus={true}
                className="form-control searchInput"
              />
            </div>
            <div className="col-3 p-0">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo />
      </div>
    </div>
  );
}
