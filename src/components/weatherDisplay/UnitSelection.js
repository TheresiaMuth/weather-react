import React from "react";

import "./UnitSelection.css";

export default function UnitSelction(props) {
  if (true) {
    return (
      <div className="col unitSelection">
        <button
          type="button"
          id="unit-button"
          className="btn btn-outline-light"
          onClick={props.showCelcius}
          disabled={props.unit}
        >
          °C
        </button>
        <span> | </span>
        <button
          type="button"
          id="unit-button"
          className="btn btn-outline-light"
          onClick={props.showFahrenheit}
          disabled={!props.unit}
        >
          °F
        </button>
      </div>
    );
  }
}
