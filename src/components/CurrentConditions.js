import React from 'react'

const CurrentConditions = (props) => {
     return (
        <>  
           <p>Temp: {props.conditions.temp_f}&deg; F</p>
           <p>Feels Like: {props.conditions.feelslike_f}&deg; F</p>
           {/* <p>Descript: {props.conditions.condition.text}</p> */}
           <p>Windspeed: {props.conditions.wind_mph}</p>
           <p>Wind Direction: {props.conditions.wind_dir}</p>
           <p>Precipitation: {props.conditions.precip_in}"</p>
           <p>Cloud Cover: {props.conditions.cloud}%</p>
           <p>Last Updated Time: {props.conditions.last_updated}</p> 
        </>
    )
}

export default CurrentConditions