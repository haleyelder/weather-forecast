import React from 'react'

const CurrentConditions = (props) => {
  // let str = (props.conditions.last_updated)
  // let newStr = str.split(" ")
  // let formatDate = newStr[0].split('-')

      return (
        <>  
           <div className="current-conditions">
           <h3>Current Forecast</h3>

              <p>Temperature {props.conditions.temp_f}&deg; F</p>
              <p>Feels like {props.conditions.feelslike_f}&deg; F</p>
              {/* <p><img src={props.conditions.condition.icon} alt="weather status icon"/></p> */}
              {/* <p>{props.conditions.condition.text}</p> */}
              <p>Windspeed {props.conditions.wind_mph} mph</p>
              <p>Wind Direction {props.conditions.wind_dir}</p>
              <p>Precipitation {props.conditions.precip_in}"</p>
              <p>Cloud Cover {props.conditions.cloud}%</p>
              <p>Last Updated:{props.conditions.last_updated}</p>
          </div> 
        </>
    )
}

export default CurrentConditions