import React from "react";
import ForecastCard from "./ForecastCard";
import "./Forecast.css";

export default function Forecast(props) {
  let forecast = props.forecastData.data;

  return (
    props?.forecastData?.showForecastData && (
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index > 0 && index < 6) {
            return (
              <div className="col" id="forecast-card" key={index}>
                <ForecastCard data={dailyForecast} />
              </div>
            );
          } else return null;
        })}
      </div>
    )
  );
}
