import React from "react";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

export default function Date(props) {
  let month = months[props.date.getMonth()];
  let dayOfMonth = props.date.getDate();
  let weekday = days[props.date.getDay()];
  let hours = props.date.getHours();
  //let minutes = props.date.getMinutes();

  function minutes(date) {
    let formatedMinutes =
      (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    return formatedMinutes;
  }

  return (
    <div className="row">
      <div className="col pt-3 pb-2 ps-3" id="current-date">
        THU | AUGUST 12 | 14:31
        {weekday} | {month} {dayOfMonth} | {hours}:${minutes(props.date)}
      </div>
    </div>
  );
}
