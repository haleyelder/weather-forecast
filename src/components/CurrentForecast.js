import React from 'react'
import axios from 'axios'

const REACT_APP_WEATHER_KEY= process.env.REACT_APP_WEATHER_KEY

function CurrentForecast() {
     
  axios.get(`https://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_KEY}&q=Portland`)
  .then(function (response) {
    
    let current = response.data
    
    // i.e. Clear
    let currentCondDescript = response.data.condition.text
    
    let currentTempF = response.data.temp_f
    let currentTempC = response.data.temp_c

    // feels like confs
    let feelsLikeF = response.data.feelslike_f
    let feelsLikeC = response.data.feelslife_c

    let lastUpdate = response.data.last_updated

    // precipitation in inches
    let precipitationIn = response.data.precip_in;

    // wind speed mph
    let windMph = response.data.wind_mph


    console.log(current);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  return (
    <div>
        <h2> Current Forecast</h2>
        <p></p>
    </div>
  );
}

export default CurrentForecast;
