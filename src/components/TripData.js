import React from "react";
import "./TripStyles.css";

function TripData(props) {
//   const handleClick = () => {
//     window.open("https://en.wikipedia.org/wiki/Albania#Climate", '_blank'); // replace with your desired URL
// }

  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image1" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
