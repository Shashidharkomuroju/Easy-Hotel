import React from "react";
import image1 from "../../../assets/Photo 1.png";
import image2 from "../../../assets/Photo 2.png";
import image3 from "../../../assets/Photo 3.png";
import image4 from "../../../assets/Photo 4.png";
import image5 from "../../../assets/Photo 5.png";
import image6 from "../../../assets/Photo 6.png";

const Home3 = () => {
  return (
    <div className="home2">
      <div className="home2-content">
        <h2>Special Offers</h2>
      </div>
      <div className="input">
        <input type="radio" /> All
        <input type="radio" /> Hotels
        <input type="radio" /> Flights
        <input type="radio" /> Multi
      </div>
      <div className="home2-img">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
      </div>
    </div>
  );
};

export default Home3;
