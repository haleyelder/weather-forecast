import React, { useState } from "react";
import axios from "axios";
import LocationData from "./LocationData";
import CurrentConditions from "./CurrentConditions";
import ThreeDayForecast from "./ThreeDayForecast";

const REACT_APP_WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY;

const CurrentForecast = () => {

  let [locationData, setLocationData] = useState({});
  let [conditions, setConditions] = useState({});
  let [city, setCity] = useState("");
  let [forecast, setForecast] = useState([]);
  
  // const success = (position) => {
  //   const latitude  = position.coords.latitude;
  //   const longitude = position.coords.longitude;
  //   console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)

  // }

  // const error = () => {
  //   console.log('unable to retrieve location')
  // }

  // if(!navigator.geolocation) {
  //   // status.textContent = 'Geolocation is not supported by your browser';
  //   console.log('geolocation is not supported')
  // } else {
  //   // status.textContent = 'Locating…';
  //   navigator.geolocation.getCurrentPosition(success, error)

  // }

  const getWeather = (e) => {
    e.preventDefault();

    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${REACT_APP_WEATHER_KEY}&q=${city}&days=3`)
      .then(function (response) {
        // console.log(response);

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
      <div className="current-conditions">
      
        <h3>Current Forecast</h3>
        <form onSubmit={getWeather}>
          <input
            type="text"
            placeholder="Search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </form>
        <button type="submit">Get Forecast</button>
        <LocationData locationData={locationData} />
      </div>

      <CurrentConditions conditions={conditions} />
      <ThreeDayForecast forecast={forecast} />
    </>
  );
};

export default CurrentForecast;
