import React from "react";

const Location = (props) => {
//   let str = (props.locationData.localtime)
//   let newStr = str.split(" ")
//   let formatDate = newStr[0].split('-')


  return (
      <div className="location-data">
          <p>
            Location: {props.locationData.name}, {props.locationData.region}
          </p>
          <p>Local time: {props.locationData.localtime}</p>
          
        </div>
  );
};

export default Location;
