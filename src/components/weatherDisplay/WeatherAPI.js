import axios from "axios";

const API_KEY = "76451f6db74c0c91e584bf9b2989b165";

export function getWeatherByCity(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  return axios.get(url);
}

export function getWeatherByLocation(latitude, longitude) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  return axios.get(url);
}

export function getForecastByLocation(latitude, longitude) {
  let urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  return axios.get(urlForecast);
}
