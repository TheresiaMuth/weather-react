import React from "react";

export default function UnitSelction(props) {
  if (props.unit) {
    return (
      <div className="col">
        <span>°C|</span>
        <a href="/" onClick={props.showFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div className="col">
        <a href="/" onClick={props.showCelcius}>
          °C
        </a>
        <span>|°F</span>
      </div>
    );
  }
}
