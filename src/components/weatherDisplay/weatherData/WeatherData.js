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
      <div className="row">
        <div className="col-4">
          <div className="row position-relative ps-1">
            <div className="col float-start" id="current-weather-description">
              {props.weatherData.description}
            </div>

            <div className="col" id="current-weather-icon">
              <i
                className={`bi ${props.weatherData.icon} position-absolute top-50 end-0`}
              ></i>
            </div>
          </div>
        </div>

        <div className="col-8 ps-5">
          <div className="row" id="add-info">
            <div className="col-2">
              <span
                data-toggle="tooltip"
                title="Likeliehood of rain in the next hour"
              >
                Rain
              </span>
              <br />
              <span data-toggle="tooltip" title="Current Windspeed">
                Wind
              </span>
            </div>

            <div className="col-3">
              <span
                data-toggle="tooltip"
                title="Likeliehood of rain in the next hour"
              >
                <span>
                  {Math.round(props.forecastData.hourly[0].pop * 100)}
                </span>{" "}
                %
              </span>
              <br />
              <span data-toggle="tooltip" title="Current Windspeed">
                <span>{Math.round(props.weatherData.wind * 3.6)}</span> km/h
              </span>
            </div>

            <div className="col-3">
              <span data-toggle="tooltip" title="Current Humidity">
                Humidity
              </span>
              <br />
              <span
                data-toggle="tooltip"
                title="Current UV-Index (1-2: low, 2-5 medium, 6-7 high, 8-10: very high, 11+ extrem)"
              >
                UV-Index
              </span>
            </div>

            <div className="col-3">
              <span data-toggle="tooltip" title="Current Humidity">
                <span>{props.weatherData.humidity}</span> %
              </span>
              <br />
              <span
                data-toggle="tooltip"
                title="Current UV-Index (1-2: low, 2-5 medium, 6-7 high, 8-10: very high, 11+ extrem)"
              >
                {Math.round(props.forecastData.current.uvi)}
              </span>
            </div>
          </div>

          <div className="row align-items-end pt-2">
            <div className="col-3" id="today-max-min">
              <div className="row">
                <div className="col temp-max pe-0">
                  <i className="bi bi-arrow-up fs-5"></i>
                  <span className="temp">
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
              <div className="row pb-2">
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
