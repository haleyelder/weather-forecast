import React from 'react'

const CurrentConditions = (props) => {
    // let localTimeData = props.conditions.last_updated   
    // let newStr = localTimeData.split(" ")
    // let formatDate = newStr[0].split('-')
    // let localTimeFormatted =  newStr[1]
    // let localDateFormatted = `${formatDate[1]}/${formatDate[2]}/${formatDate[0]}`
     return (
        <>  
           <div className="current-conditions">
              <p>Temp: {props.conditions.temp_f}&deg; F</p>
              <p>Feels Like: {props.conditions.feelslike_f}&deg; F</p>
              {/* <p>Descript: {props.conditions.condition.text}</p> */}
              <p>Windspeed: {props.conditions.wind_mph} mph</p>
              <p>Wind Direction: {props.conditions.wind_dir}</p>
              <p>Precipitation: {props.conditions.precip_in}"</p>
              <p>Cloud Cover: {props.conditions.cloud}%</p>
              <p>Last Updated Time: {props.conditions.last_updated}</p>
          </div> 
        </>
    )
}

export default CurrentConditions