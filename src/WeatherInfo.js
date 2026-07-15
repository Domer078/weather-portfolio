import React from "react";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>Paris</h1>

          <ul>
            <li>
              {" "}
              <span>Tuesday 22:19</span>, few clouds
            </li>
            <li>
              Humidity:<strong> 52%</strong>, Wind:
              <strong> 3.13km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <canvas width={52} height={52}></canvas>
            <div>
              <span className="temperature">21</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
