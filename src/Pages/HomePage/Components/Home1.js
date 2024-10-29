import React from "react";
import image from "../../../assets/Landing page.png";

const Home1 = () => {
  return (
    <div className="home">
      <div className="home-img">
        <img src={image} alt="" />
      </div>
      <div className="home-content">
        <h1>Discover Your Trip Worldwide !</h1>
        <h2>Compare The Best Offers !</h2>
        <h2>Share Your Experiences !</h2>
      </div>
    </div>
  );
};

export default Home1;
