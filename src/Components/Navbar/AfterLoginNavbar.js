import React, { useState } from "react";
// import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.css";
// import DropdownButton from "react-bootstrap/DropdownButton";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiTireIronCross } from "react-icons/gi";

const AfterLoginNavbar = ({ username, onLogout }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="after-login">
      <div className="logo">
        <Link to="/landing">
          <img src={require("../../assets/Logo.png")} alt="" />
        </Link>
      </div>
      {/* <div className="dropdown">
        <DropdownButton id="dropdown-basic-button" title="Hotel's">
          <Dropdown.Item>
            <Link to="/Novotel">Novotel</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/HotelPark">The Hotel Park</Link>
          </Dropdown.Item>
          <Dropdown.Item><Link to='/Shashi'>The Shashi's Hotel</Link></Dropdown.Item>
        </DropdownButton>
      </div> */}
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className={click ? "menu active" : "menu"}>
        <div className="account-content">
          <div className="account-icon">
            <VscAccount size={30} />
          </div>
          <div className="account-name">
            <h5>Your Account</h5>
            <h5>Shashidhar</h5>
          </div>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <GiTireIronCross size={40} style={{ color: "#07689F" }} />
        ) : (
          <RxHamburgerMenu size={40} style={{ color: "#07689F" }} />
        )}
      </div>
    </nav>
  );
};

export default AfterLoginNavbar;
