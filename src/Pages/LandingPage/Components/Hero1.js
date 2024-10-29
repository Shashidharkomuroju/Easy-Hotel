import React from 'react';
import image from "../../../assets/Landing page.png";

const Hero1 = () => {
  return (
    <div className="hero1">
      <div className="hero1-img">
        <img src={image} alt="" />
      </div>
      <div className="hero1-content">
        <h1>Discover Your Trip Worldwide !</h1>
        <h2>Compare The Best Offers !</h2>
        <h2>Share Your Experiences !</h2>
      </div>
    </div>
  )
}

export default Hero1