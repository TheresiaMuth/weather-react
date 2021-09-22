import React from "react";
import ForecastCard from "./ForecastCard";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <ForecastCard
        day="FRI"
        tempmax="27"
        tempmin="17"
        icon="bi bi-brightness-high"
      />
      <ForecastCard
        day="SAT"
        tempmax="27"
        tempmin="16"
        icon="bi bi-brightness-high"
      />
      <ForecastCard
        day="SUN"
        tempmax="26"
        tempmin="14"
        icon="bi bi-cloud-sun"
      />
      <ForecastCard
        day="MON"
        tempmax="24"
        tempmin="14"
        icon="bi bi-cloud-drizzle"
      />
      <ForecastCard
        day="TUE"
        tempmax="25"
        tempmin="15"
        icon="bi bi-cloud-sun"
      />
    </div>
  );
}
