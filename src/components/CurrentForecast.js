import React, {useState, } from 'react'
import axios from 'axios'
import LocationData from './LocationData'
import CurrentConditions from './CurrentConditions'
import ThreeDayForecast from './ThreeDayForecast'

const REACT_APP_WEATHER_KEY= process.env.REACT_APP_WEATHER_KEY

const CurrentForecast = () => {
  let [locationData, setLocationData] = useState({})
  let [conditions, setConditions] = useState({})
  let [city, setCity] = useState('')
  let [forecast, setForecast] = useState([])

  const getWeather = e => {
    e.preventDefault();
      
    const getCurrentConditions = () => {
        return axios.get(` https://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_KEY}&q=${city}`)
      }

      const getForecastConditions = () => {
        return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${REACT_APP_WEATHER_KEY}&q=${city}&days=3`)
      }

      Promise.all([getCurrentConditions(), getForecastConditions()])
      .then(function (response) {  
      
        let locationResponse = response[0].data.location
        let conditionsResponse = response[0].data.current

        // first day of three; needs arr loop
        let forecastResponse = response[1].data.forecast.forecastday[0]
        
        console.log(forecastResponse.day.mintemp_f)

        setLocationData(locationResponse)
        setConditions(conditionsResponse)
        setForecast(forecastResponse)
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
      <ThreeDayForecast forecast={forecast}/>
    </>
  )
}

export default CurrentForecast;
