import React from "react";
import CurrentLocation from "../currentLocation/CurrentLocation";
import Date from "../date/Date";
import WeatherData from "../weatherData/WeatherData";

export default function WeatherToday() {
  return (
    <div className="WeatherToday">
      <Date />
      <CurrentLocation />
      <WeatherData />
    </div>
  );
}
