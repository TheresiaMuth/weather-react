import React from "react";
import CurrentLocation from "./currentLocation/CurrentLocation";
import Date from "./date/Date";
import WeatherData from "./weatherData/WeatherData";

export default function WeatherToday(props) {
  return (
    <div className="WeatherToday">
      <Date date={props.weatherData.date} />
      <CurrentLocation city={props.weatherData.city} />
      <WeatherData weatherData={props.weatherData} />
    </div>
  );
}
