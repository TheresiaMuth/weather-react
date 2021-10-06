import React, { useState } from "react";
import Search from "./components/search/Search.js";
import WeatherDisplay from "./components/weatherDisplay/WeatherDisplay";
import Footer from "./components/footer/Footer";

import {
  getWeatherByCity,
  getWeatherByLocation,
  getForecastByLocation,
} from "./components/weatherDisplay/WeatherAPI";
import { weatherIconMap } from "./components/weatherDisplay/WeatherIconMap";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({ showWeatherData: false });
  const [forecastData, setForecastData] = useState({ showForecastData: false });

  function setWeatherDataByResponse(response) {
    console.log(response.data);
    setWeatherData({
      showWeatherData: true,
      temperature: response.data.main.temp,
      minTemperature: response.data.main.temp_min,
      maxTemperature: response.data.main.temp_max,
      feltLike: response.data.main.feels_like,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: weatherIconMap[response.data.weather[0].icon],
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function setForecastDataByResponse(response) {
    console.log(response.data);
    setForecastData({
      showForecastData: true,
      daily: response.data.daily,
      current: response.data.current,
      hourly: response.data.hourly,
    });
  }

  function handleSubmitCitySearch(city) {
    if (city) {
      getWeatherByCity(city)
        .then((response) => {
          setWeatherDataByResponse(response);
          getForecastByLocation(
            response.data.coord.lat,
            response.data.coord.lon
          ).then((response) => setForecastDataByResponse(response));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    if (position) {
      getWeatherByLocation(latitude, longitude)
        .then((response) => {
          setWeatherDataByResponse(response);
        })
        .catch((error) => {
          console.error(error);
        });
      getForecastByLocation(latitude, longitude)
        .then((response) => {
          setForecastDataByResponse(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function getPosition() {
    navigator.geolocation.getCurrentPosition(success);
  }

  function handleSubmitLocationButton() {
    getPosition();
  }

  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <Search
            defaultCity="Munich"
            handleSubmitCitySearch={handleSubmitCitySearch}
            handleSubmitLocationButton={handleSubmitLocationButton}
          />
          <WeatherDisplay
            weatherData={weatherData}
            forecastData={forecastData}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
