import React from "react";

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
        <h1>Paris</h1>
        <div className="mb-4">
          <ul>
            <li>Tuesday 22:19, few clouds</li>
            <li>Humidity: 52%, Wind: 3.13km/h</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-9">
            <h2>34°C</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
