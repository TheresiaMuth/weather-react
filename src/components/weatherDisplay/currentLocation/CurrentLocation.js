import React from "react";
import "./CurrentLocation.css";

export default function CurrentLocation(props) {
  return (
    <div className="row align-items-start">
      <div className="col pb-3 text-uppercase" id="current-city">
        {props.city}
      </div>
    </div>
  );
}
