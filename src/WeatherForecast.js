import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (!props.coordinates) return;

    setLoaded(false);

    const apiKey = "63340413at53cc6c6ba7a81a11oc3f05";
    const longitude = props.coordinates.longitude;
    const latitude = props.coordinates.latitude;

    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.coordinates]);

  if (!loaded) {
    return null;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map((dailyForecast, index) =>
          index < 5 ? (
            <div className="col" key={index}>
              <WeatherForecastDay data={dailyForecast} />
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}
