import React, {useState, } from 'react'
import axios from 'axios'
import LocationData from './LocationData'
import CurrentConditions from './CurrentConditions'

const REACT_APP_WEATHER_KEY= process.env.REACT_APP_WEATHER_KEY
const URL = `https://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_KEY}&q=Portland`

const CurrentForecast = () => {
  let [location, setLocation] = useState({})
  let [conditions, setConditions] = useState({})

  const getForecast = () => {
    axios.get(URL) 
      .then(function (response) {
        let locationResponse = response.data.location
        let conditionsResponse = response.data.current

        setLocation(locationResponse)
        setConditions(conditionsResponse)
       console.log(conditionsResponse.condition.text)
      })
      .catch(function (error) {
        console.log(error)
      })
  }


  return (
    <>
      <div> Current Forecast </div>
      <button onClick={getForecast}>Get Forecast</button>
      <LocationData location={location}/>
      <CurrentConditions conditions={conditions}/>
    </>
  )
}

export default CurrentForecast;
