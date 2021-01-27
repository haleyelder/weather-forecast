import React from 'react'

const Location = (props) => {

    return (
        <div className="location-data">
            <p> Location: {props.locationData.name}, {props.locationData.region} </p>
            <p>Local Time: {props.locationData.localtime}</p>
        </div>
    )
}

export default Location;