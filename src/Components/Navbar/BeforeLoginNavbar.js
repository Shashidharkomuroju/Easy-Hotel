import React from "react";
import "./Navbar.css"; 
import { Link } from "react-router-dom";

const BeforeLoginNavbar = () => {
  return (
    <nav className="before-login">
      <div className="logo">
       <Link to='/'><img src={require("../../assets/Logo.png")} alt="" /></Link>
      </div>
      <div className="search">
        <input type="text"  placeholder="Search..." />
      </div>
      <div className="nav-links">
        {/* <button><Link to='/Login'>Sign In</Link></button> */}
        <button><Link to='/Register'>Register</Link></button>
      </div>
    </nav>
  );
};

export default BeforeLoginNavbar;
