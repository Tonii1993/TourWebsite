import React from "react";
// import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";

function Destionation() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quod
        possimus esse cumque tenetur, delectus cupiditate ipsam! Officiis
        velit corrupti exercitationem veritatis nihil provident placeat
        reiciendis laborum illum ipsum quod nostrum nesciunt magnam,
        distinctio enim hic blanditiis tenetur deleniti consequatur
        doloremque nemo quisquam alias. Hic voluptate itaque repudiandae
        placeat omnis?"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="second-des"
        heading="Mt. Daguldul, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
        inside a lake inside an island. If you fancy a closer look, the hike up
        to the crater is a mere 45 minutes, and is easy enough for
        beginners. Guides will assist you most of the way, and you'll see
        the peculiar environment found on an active volcano, including
        volcanic rocks and steam vents. The hike can be dusty and hot, so
         plan for an early morning trip, and then unwind with some bulalo
        before heading back home!"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
}

export default Destionation;
