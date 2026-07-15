import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>Paris</h1>

          <ul>
            <li>
              {" "}
              <span>
                <FormattedDate date={props.data.date} />
              </span>
              , {props.data.description}
            </li>
            <li>
              Humidity:<strong> {props.data.humidity}%</strong>, Wind:
              <strong> {props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <canvas width={52} height={52}></canvas>
            <div>
              <span className="temperature">{props.data.temperature}</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
