import React from "react";
import "./Footer.css";
import paypal from "../../assets/International.png";
import visa from "../../assets/visa-logo.png";
import master from "../../assets/Masterrcard.png";
import amex from "../../assets/Amex.png";
import linkedin from "../../assets/_Linkedin.png";
import telegram from "../../assets/_Telegram.png";
import twitter from "../../assets/_Twitter.png";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/_Instagram.png";

const Footer = () => {
  const cards = [
    {
      id: 1,
      Name: paypal,
    },
    {
      id: 2,
      Name: visa,
    },
    {
      id: 3,
      Name: master,
    },
    {
      id: 4,
      Name: amex,
    },
  ];
  const social = [
    {
      id: 1,
      Name: linkedin,
    },
    {
      id: 2,
      Name: telegram,
    },
    {
      id: 3,
      Name: twitter,
    },
    {
      id: 4,
      Name: facebook,
    },
    {
      id: 4,
      Name: instagram,
    },
  ];
  return (
    <footer>
      <div className="footer-content">
        <div className="text1">
          <h3>Go Further With The EasySet24 App</h3>
          <p>
            Enjoy savings on chosen hotels and flights when you book through the
            EasySet24 website. <br /> Additionally, earn One Key Cash for every
            booking made through the app.
          </p>
          <h4>EasySet24 App Footer</h4>
        </div>
        <div className="text2">
          <img
            src={require("../../assets/Auto layout barcode App Store.png")}
            alt=""
          />
          <img
            src={require("../../assets/Auto layout barcode Google Play.png")}
            alt=""
          />
        </div>
      </div>
      <div className="footer-content2">
        <div className="card1">
          <h4>About us</h4>
          <p>Our Story</p>
          <p>Work With Us</p>
          <p>Press & Media</p>
          <p>Privacy & Security</p>
        </div>
        <div className="card1">
          <h4>We Offer</h4>
          <p>Trip Sponsorship</p>
          <p>Last Minutes Flights</p>
          <p>Best Deals</p>
          <p>AI-Driven Search </p>
        </div>
        <div className="card1">
          <h4>Headquarters</h4>
          <p>England</p>
          <p>France</p>
          <p>Canada</p>
          <p>Iceland</p>
        </div>
        <div className="card1">
          <h4>Travel Blogs</h4>
          <p>Bali Travel Guide</p>
          <p>Sri Travel Guide</p>
          <p>Peru Tavel Guide</p>
          <p>Swiss Travel Guide</p>
        </div>
        <div className="card1">
          <h4>Activities</h4>
          <p>Tour Leading</p>
          <p>Cruising & sailing</p>
          <p>Camping</p>
          <p>Kayaking</p>
        </div>
        <div className="card1">
          <h4>services</h4>
          <p>report Error</p>
          <p>Ask Online</p>
          <p>Travel Insurance</p>
        </div>
      </div>
      <div className="footer-content3">
        <div className="cards">
          {cards.map((item) => {
            return <img src={item.Name} alt="" key={item.id} />;
          })}
        </div>
        <div className="social">
          {social.map((item) => {
            return <img src={item.Name} alt="" key={item.id} />;
          })}
        </div>
        <div className="email">
          <h3>Email</h3>
          <input type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
