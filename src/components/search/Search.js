import React, { useState } from "react";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [searchIcon, setSearchIcon] = useState("invisible");

  function updateCity(event) {
    setCity(event.target.value);
    if (!event.target.value) {
      setSearchIcon("invisible");
    } else {
      setSearchIcon("visible");
    }
  }

  function handleSubmitCitySearch(event) {
    event.preventDefault();
    props.handleSubmitCitySearch(city);
    setCity("");
    setSearchIcon("invisible");
  }

  function handleSubmitLocationButton(event) {
    event.preventDefault();
    props.handleSubmitLocationButton();
  }

  return (
    <div className="row" id="city-selection">
      <div className="col-1">
        <button
          type="button"
          className="btn btn-outline-light"
          id="current-location-button"
          onClick={handleSubmitLocationButton}
        >
          <i className="bi bi-geo-alt-fill"></i>
        </button>
      </div>

      <div className="col-7">
        <form id="city-searchbar" onSubmit={handleSubmitCitySearch}>
          <div className="input-group mycustom">
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              id="city-search"
              aria-describedby="citySearch"
              placeholder="Search City..."
              onChange={updateCity}
              value={city}
            />
            <button
              className="btn btn-outline-light"
              type="button"
              id="button-go"
              onClick={handleSubmitCitySearch}
            >
              <i className={`bi bi-search ${searchIcon}`}></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
