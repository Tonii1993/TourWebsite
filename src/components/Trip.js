import React from "react";
import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/Porto_Palermo,_Albanian_Riviera_2016.jpg";
import Trip2 from "../assets/9.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Climate in Albania"
          text="The climate in the country is extremely variable and diverse owing to the differences in latitude,
          longitude and altitude. Albania experiences predominantly a Mediterranean and continental climate, with four distinct seasons.
          Defined by the Köppen classification, it accommodates five major climatic types ranging from Mediterranean and subtropical in the western half to oceanic,
          continental and subarctic in the eastern half of Albania."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country
                occupying parts of the Malay Peninsula
                and the island of Borneo. It's known for its
                 beaches, rainforests and mix of Malay,
                 Chinese, Indian and European cultural
                influences."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="France, in Western Europe, encompasses
                medieval cities, alpine villages and
                Mediterranean beaches. Paris, its capital, is
                famed for its fashion houses, classical art
                museums including the Louvre and
                monuments like the Eiffel Tower."
        />
      </div>
    </div>
  );
}

export default Trip;
