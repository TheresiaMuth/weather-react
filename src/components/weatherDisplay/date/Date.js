import React from "react";

export const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

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

export default function currentDate() {
  let now = new Date();

  let month = months[now.getMonth()];
  let dayOfMonth = now.getDate();
  let weekday = days[now.getDay()];
  let hour = now.getHours();
  function minute(date) {
    let formatedMinutes =
      (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    return formatedMinutes;
  }

  return (
    <div className="row">
      <div className="col pt-3 pb-2 ps-3" id="current-date">
        {weekday} | {month} {dayOfMonth} | {hour}:{minute(now)}
      </div>
    </div>
  );
}
