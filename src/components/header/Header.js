import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="row" id="city-selection">
      <div className="col-1">
        <button
          type="button"
          className="btn btn-outline-light"
          id="current-location-button"
        >
          <i className="bi bi-geo-alt-fill"></i>
        </button>
      </div>

      <div className="col-7">
        <form id="city-searchbar">
          <div className="input-group mycustom">
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              id="city-search"
              aria-describedby="citySearch"
              placeholder="Search City..."
              //onInput="displaySearchIcon()"
              //onChange="displaySearchIcon()"
            />
            <button
              className="btn btn-outline-light"
              type="button"
              id="button-go"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
