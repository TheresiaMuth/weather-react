import React from "react";
import "./WeatherData.css";

export default function WeatherData() {
  return (
    <div className="row" id="weather-today">
      <div className="col-4" id="weather-today-left">
        <div className="row position-relative ps-1" id="current-weather">
          <div className="col float-start" id="current-weather-description">
            Clouds
          </div>

          <div className="col" id="current-weather-icon">
            <i
              className="bi bi-cloud-rain position-absolute top-50 end-0"
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
            <span id="rain-likelihood">{26}</span> %
            <br />
            <span id="wind-speed">{5}</span> m/s
          </div>

          <div className="col-3" id="add-info-humidityuv">
            Humidity
            <br />
            UV-Index
          </div>

          <div className="col-3" id="add-info-humidityuv-input">
            <span id="humidity">{49}</span> %
            <br />
            <span id="uv-index">{5}</span>
          </div>
        </div>

        <div className="row align-items-end pt-2" id="temperature-area">
          <div className="col-3" id="today-max-min">
            <div className="row">
              <div className="col temp-max pe-0">
                <i className="bi bi-arrow-up fs-5"></i>
                <span className="temp" id="today-max">
                  {29}
                </span>
                °
              </div>
            </div>

            <div className="row">
              <div className="col pb-1 pe-0 temp-min">
                <i className="bi bi-arrow-down fs-5"></i>
                <span className="temp" id="today-min">
                  {16}
                </span>
                °
              </div>
            </div>
          </div>

          <div
            className="col temp d-flex justify-content-center"
            id="current-temperature"
          >
            {26}
          </div>

          <div className="col-4 pb-2">
            <div className="row pb-2" id="unit-selection">
              <div className="col">
                <a href="" className="disabled selectedUnit" id="select-c">
                  °C
                </a>
                <span>|</span>
                <a href="" id="select-f">
                  °F
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col">
                Felt like{" "}
                <span className="temp" id="felt-like">
                  {27}
                </span>
                °
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
