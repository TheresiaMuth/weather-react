import axios from "axios";

const API_KEY = "76451f6db74c0c91e584bf9b2989b1655";

export function getWeatherByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  return axios.get(url);
}
