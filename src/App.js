import React, { useState } from "react";
import Search from "./components/search/Search.js";
import WeatherDisplay from "./components/weatherDisplay/WeatherDisplay";
import Footer from "./components/footer/Footer";
import Forecast from "./components/forecast/Forecast";
import {
  getWeatherByCity,
  getWeatherByLocation,
} from "./components/weatherDisplay/WeatherAPI";
import { weatherIconMap } from "./components/WeatherIconMap";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({ showInfo: false });

  function setVariablesByResponse(response) {
    console.log(response.data);
    setWeatherData({
      showInfo: true,
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

  function handleSubmitCitySearch(city) {
    if (city) {
      getWeatherByCity(city)
        .then((response) => {
          setVariablesByResponse(response);
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
          setVariablesByResponse(response);
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
          <WeatherDisplay weatherData={weatherData} />
          <hr />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
