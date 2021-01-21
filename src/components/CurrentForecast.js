import React, {useState, useEffect} from 'react'
import axios from 'axios'

const REACT_APP_WEATHER_KEY= process.env.REACT_APP_WEATHER_KEY
const URL = `https://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_KEY}&q=Portland`



const CurrentForecast = () => {

  const [data, setData] = useState({
    location: '',
    localtime: '',
    currentLastUpdate: '',
    currentTempF: '',
    currentCondDescript: '',
    currentWintMph: ''
  })

  useEffect(() => {
    axios.get(URL)
      .then( res => {
        let locationData = res.data.location
        let currentConditions = res.data.current

        //console.log(res.data.location)
        //location.name = portland
        //location.localtime = ISO

        setData({
          location: locationData.name, 
          localtime: locationData.localtime,
          currentLastUpdate: currentConditions.last_updated,
          currentTempF: currentConditions.temp_f,
          currentCondDescript: currentConditions.condition.text,
          currentWintMph: currentConditions.wind_mph
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <div>
       
        <h2> Current Forecast</h2>
       <>
        <p>City: {data.location}</p>        
        <p>Location Local Time: {data.localtime}</p>  

        <hr></hr>
        <p>Current Temp: {data.currentTempF}&deg;</p>
        <p>Currently: {data.currentCondDescript}</p>
        <p>Wind Speed: {data.currentWintMph}mph</p>
        <em>Last Updated: {data.currentLastUpdate}</em>
       </>
    </div>
  );
}

export default CurrentForecast;
