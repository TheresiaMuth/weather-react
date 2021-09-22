import React from "react";

export default function ForecastCard(props) {
  return (
    <div class="col" id="forecast-card">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">
            <i class={props.icon}></i>
          </h5>
          <p class="card-subtitle mb-2">{props.day}</p>
          <p class="card-text">
            <span class="col temp-max">
              <i class="bi bi-arrow-up"></i>
              <span class="temp">{props.tempmax}</span>°
            </span>
            <span class="col temp-min">
              <i class="bi bi-arrow-down"></i>
              <span class="temp">{props.tempmin}</span>°
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
