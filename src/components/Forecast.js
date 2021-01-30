import React, { useState } from "react";
import axios from "axios";
import Location from "./Location";
import CurrentConditions from "./CurrentConditions";
import ThreeDayForecast from "./ThreeDayForecast";

const REACT_APP_WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY;

const CurrentForecast = () => {
  let [visible, setVisible] = useState(false);
  let [locationData, setLocationData] = useState({});
  let [conditions, setConditions] = useState({});
  let [city, setCity] = useState("");
  let [forecast, setForecast] = useState([]);

  const getWeather = (e) => {
    setVisible(true);
    e.preventDefault();

    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${REACT_APP_WEATHER_KEY}&q=${city}&days=3`
      )
      .then(function (response) {
        let locationResponse = response.data.location;
        let conditionsResponse = response.data.current;
        let forecastResponse = response.data.forecast.forecastday;

        setLocationData(locationResponse);
        setConditions(conditionsResponse);
        setForecast(forecastResponse);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="current-search">
        <form onSubmit={getWeather}>
          <input
            type="text"
            placeholder="Search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Check Forecast</button>
        </form>
      </div>
      {visible && (
        <>
          <Location locationData={locationData} />

          <CurrentConditions conditions={conditions} />
          <ThreeDayForecast forecast={forecast} />
        </>
      )}
    </>
  );
};

export default CurrentForecast;
