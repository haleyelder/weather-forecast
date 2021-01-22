import React from 'react'

const LocationData = (props) => {
    return (
        <div>
            <p> Location: {props.locationData.name}, {props.locationData.region} </p>
            <p> Local Time: {props.locationData.localtime}</p>
        </div>
    )
}

export default LocationData;