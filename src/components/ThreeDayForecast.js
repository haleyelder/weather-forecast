import React from "react";

const ThreeDayForecast = (props) => {
  let currentDate = props.forecast.date
  console.log(currentDate)
  // let localDateFormatted = `${formatDate[1]}/${formatDate[2]}/${formatDate[0]}`

  const forecastList = props.forecast.map((item) => {

    return (
      <div key={item}>
        {/* <p> Date: {localDateFormatted}</p> */}
        <p> Moon Phase: {item.astro.moon_phase}</p>
        <p>Min Temp: {item.day.mintemp_f}&deg; F</p>
        <p>Max Temp: {item.day.maxtemp_f}&deg; F</p>
        <p>Chance of Rain: {item.day.daily_chance_of_rain}%</p>
        <p>Descript: {item.day.condition.text}</p>
        <p>Moon Phase: {item.astro.moon_phase}</p>
        <p>Sunrise: {item.astro.sunrise}</p>
        <p>Sunset: {item.astro.sunset}</p>
      </div>
    );
  });

  return (
    <>
      <div className="extended-forecast-block">
        <h3> Three Day Forecast </h3>
        {forecastList}
      </div>
    </>
  );
};

export default ThreeDayForecast;
