import React from "react";

const Location = (props) => {
  return (
    <div className="container">
      <div className="location-data  row">
        <div className="column">
          <p>
            Location: {props.locationData.name}, {props.locationData.region}
          </p>
          <p>Local Time: {props.locationData.localtime}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
