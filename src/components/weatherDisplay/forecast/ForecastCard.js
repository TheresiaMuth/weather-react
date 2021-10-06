import React from "react";
import { days } from "../date/Date";
import { weatherIconMap } from "../WeatherIconMap";
import { calculateCelciusToFahrenheit } from "../TemperatureCalculations";

export default function ForecastCard(props) {
  function showTemp(temp) {
    return !props.unit
      ? Math.round(calculateCelciusToFahrenheit(temp))
      : Math.round(temp);
  }

  function formatForecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return days[day];
  }

  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">
          <i className={`bi ${weatherIconMap[props.data.weather[0].icon]}`}></i>
        </h5>
        <p className="card-subtitle mb-2">{formatForecastDay()}</p>
        <p className="card-text">
          <span className="col temp-max">
            <i className="bi bi-arrow-up"></i>
            <span className="temp">{showTemp(props.data.temp.max)}</span>°
          </span>
          <span className="col temp-min">
            <i className="bi bi-arrow-down"></i>
            <span className="temp">{showTemp(props.data.temp.min)}</span>°
          </span>
        </p>
      </div>
    </div>
  );
}
