import React from "react";
import UnitSelction from "../UnitSelection";
import { calculateCelciusToFahrenheit } from "../TemperatureCalculations";

import "./WeatherData.css";

export default function WeatherData(props) {
  function showTemp(temp) {
    return !props.unit
      ? Math.round(calculateCelciusToFahrenheit(temp))
      : Math.round(temp);
  }

  return (
    props?.weatherData?.showWeatherData &&
    props?.forecastData?.showForecastData && (
      <div className="row" id="weather-today">
        <div className="col-4" id="weather-today-left">
          <div className="row position-relative ps-1" id="current-weather">
            <div className="col float-start" id="current-weather-description">
              {props.weatherData.description}
            </div>

            <div className="col" id="current-weather-icon">
              <i
                className={`bi ${props.weatherData.icon} position-absolute top-50 end-0`}
                id="weather-icon"
              ></i>
            </div>
          </div>
        </div>

        <div className="col-8 ps-5" id="weather-today-right">
          <div className="row" id="add-info">
            <div className="col-2" id="add-info-rainwind">
              Rain
              <br />
              Wind
            </div>

            <div className="col-3" id="add-info-rainwind-input">
              <span id="rain-likelihood">
                {Math.round(props.forecastData.hourly[0].pop * 100)}
              </span>{" "}
              %
              <br />
              <span id="wind-speed">
                {Math.round(props.weatherData.wind * 3.6)}
              </span>{" "}
              km/h
            </div>

            <div className="col-3" id="add-info-humidityuv">
              Humidity
              <br />
              UV-Index
            </div>

            <div className="col-3" id="add-info-humidityuv-input">
              <span id="humidity">{props.weatherData.humidity}</span> %
              <br />
              <span id="uv-index">
                {Math.round(props.forecastData.current.uvi)}
              </span>
            </div>
          </div>

          <div className="row align-items-end pt-2" id="temperature-area">
            <div className="col-3" id="today-max-min">
              <div className="row">
                <div className="col temp-max pe-0">
                  <i className="bi bi-arrow-up fs-5"></i>
                  <span className="temp" id="today-max">
                    {showTemp(props.forecastData.daily[0].temp.max)}
                  </span>
                  °
                </div>
              </div>

              <div className="row">
                <div className="col pb-1 pe-0 temp-min">
                  <i className="bi bi-arrow-down fs-5"></i>
                  <span className="temp" id="today-min">
                    {showTemp(props.forecastData.daily[0].temp.min)}
                  </span>
                  °
                </div>
              </div>
            </div>

            <div
              className="col temp d-flex justify-content-center"
              id="current-temperature"
            >
              {showTemp(props.weatherData.temperature)}
            </div>

            <div className="col-4 pb-2">
              <div className="row pb-2" id="unit-selection">
                <UnitSelction
                  showCelcius={props.showCelcius}
                  showFahrenheit={props.showFahrenheit}
                  unit={props.unit}
                />
              </div>

              <div className="row">
                <div className="col">
                  Felt like{" "}
                  <span className="temp" id="felt-like">
                    {showTemp(props.weatherData.feltLike)}
                  </span>
                  °
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
