import React, {useState, } from 'react'
import axios from 'axios'
import LocationData from './LocationData'
import CurrentConditions from './CurrentConditions'

const REACT_APP_WEATHER_KEY= process.env.REACT_APP_WEATHER_KEY

const CurrentForecast = () => {
  let [city, setCity] = useState('')
  let [locationData, setLocationData] = useState({})
  let [conditions, setConditions] = useState({})

  const getWeather = e => {
    e.preventDefault();

    axios.get(`https://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_KEY}&q=${city}`)

      .then(function (response) {
        let locationResponse = response.data.location
        let conditionsResponse = response.data.current

        setLocationData(locationResponse)
        setConditions(conditionsResponse)

      })
      .catch(function (error) {
        console.log(error)
      })
  }


  return (
    <>
      <div> Current Forecast </div>

      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>

      <button type="submit">Get Forecast</button>
      
      <LocationData locationData={locationData}/>
      <CurrentConditions conditions={conditions}/>
    </>
  )
}

export default CurrentForecast;
