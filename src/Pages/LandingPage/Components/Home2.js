import React from "react";
import { useNavigate } from "react-router-dom";

const Home2 = () => {

  const navigate = useNavigate();

  const handleFindHotelClick = () =>{
    navigate('/HotelDetails')
  }

  return (
    <div className="home2-btn">
      <button onClick={handleFindHotelClick}>
        Find Hotels &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>&#8594;</span> 
      </button>
    </div>
  );
};

export default Home2;
