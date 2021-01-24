import React from 'react'

const ThreeDayForecast = (props) => {
    
    
   return (
        <div>
            <h3> Three Day Forecast </h3>
            <p>Date: {props.forecast.date} </p>
            <p>Min Temp:  {props.forecast.day.mintemp_f}</p>
            <p>Max Temp: {props.forecast.day.maxtemp_f}&deg;F</p>
            <p>Chance of Rain: {props.forecast.day.daily_chance_of_rain}%</p>
            <p>Descript: {props.forecast.day.condition.text}</p>
            <p>Moon Phase: {props.forecast.astro.moon_phase}</p>
            <p>Sunrise: {props.forecast.astro.sunrise}</p>
            <p>Sunset: {props.forecast.astro.sunset}</p>
        
            </div>
    )
}

export default ThreeDayForecast;