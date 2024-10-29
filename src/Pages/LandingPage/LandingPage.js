import React from "react";
import "./LandingStyle.css";
import Hero from "./Components/Hero";
// import Home1 from '../HomePage/Components/Home1'
import Home3 from "../HomePage/Components/Home3";
import Home4 from "../HomePage/Components/Home4";
import Home5 from "../HomePage/Components/Home5";
import Footer from "../../Components/Footer/Footer";
import Hero1 from "./Components/Hero1";
import Home2 from "./Components/Home2";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Hero1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Footer />
    </div>
  );
};

export default LandingPage;
