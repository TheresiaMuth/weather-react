import React from "react";

export default function ForecastCard(props) {
  return (
    <div className="col" id="forecast-card">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">
            <i className={props.icon}></i>
          </h5>
          <p className="card-subtitle mb-2">{props.day}</p>
          <p className="card-text">
            <span className="col temp-max">
              <i className="bi bi-arrow-up"></i>
              <span className="temp">{props.tempmax}</span>°
            </span>
            <span className="col temp-min">
              <i className="bi bi-arrow-down"></i>
              <span className="temp">{props.tempmin}</span>°
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
