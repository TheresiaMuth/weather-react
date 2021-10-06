import React, { useState } from "react";
import CurrentLocation from "./currentLocation/CurrentLocation";
import Date from "./date/Date";
import WeatherData from "./weatherData/WeatherData";
import Forecast from "./forecast/Forecast";

export default function WeatherDisplay(props) {
  const [celsius, setCelsius] = useState(true);

  function showFahrenheit(event) {
    event.preventDefault();
    setCelsius(false);
  }

  function showCelcius(event) {
    event.preventDefault();
    setCelsius(true);
  }

  return (
    <div className="WeatherDisplay">
      <Date date={props.weatherData.date} />
      <CurrentLocation city={props.weatherData.city} />
      <WeatherData
        weatherData={props.weatherData}
        unit={celsius}
        showCelcius={showCelcius}
        showFahrenheit={showFahrenheit}
      />
      <hr />
      <Forecast
        forecastData={props.forecastData}
        unit={celsius}
        showCelcius={showCelcius}
        showFahrenheit={showFahrenheit}
      />
    </div>
  );
}
