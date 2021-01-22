import React from 'react'

const LocationData = (props) => {
    return (
        <div>
            <p> Location: {props.location.name}, {props.location.region} </p>
            <p> Local Time: {props.location.localtime}</p>
        </div>
    )
}

export default LocationData;