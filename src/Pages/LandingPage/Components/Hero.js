import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <button>Trip</button>
      <button>%Deals</button>
      <button className="hotel">
        <Link to="/hotel-page">Hotel</Link>
      </button>
      <button>Flight</button>
      <button>Apartment</button>
      <button>Camper</button>
    </div>
  );
};

export default Hero;
