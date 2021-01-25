import React from 'react'

const LocationData = (props) => {
    let localTimeData = props.locationData.localtime     
    let newStr = localTimeData.split(" ")
    let formatDate = newStr[0].split('-')
    let localTimeFormatted =  newStr[1]
    let localDateFormatted = `${formatDate[1]}/${formatDate[2]}/${formatDate[0]}`
    
    return (
        <div>
            <p> Location: {props.locationData.name}, {props.locationData.region} </p>
            <p>Local Time: {localDateFormatted}  {localTimeFormatted}</p>
        </div>
    )
}

export default LocationData;