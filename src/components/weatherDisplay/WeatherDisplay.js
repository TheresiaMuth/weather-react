import React, { useState } from "react";
import CurrentLocation from "./currentLocation/CurrentLocation";
import Date from "./date/Date";
import WeatherData from "./weatherData/WeatherData";

export default function WeatherDisplay(props) {
  const [celsius, setCelsius] = useState(true);

  function showFahrenheit(event) {
    console.log("ich bin hier");
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
    </div>
  );
}
