import React from "react";

const Details = () => {
  return (
    <div className="main-1">
      <div className="heading">
        <h4>Place Details</h4>
        <h6>Info & Price</h6>
        <h6>Rooms & Beds</h6>
        <h6>Place Rules</h6>
      </div>
      <div className="details">
        <div className="part-1">
          <p>
            This stylish and roomy family home is nestled in Stockholm's Kista
            district, just 14 km away from the Royal Swedish Opera, Museum of
            Medieval Stockholm, and Stureplan. Offering the convenience of free
            private parking, it's also a short 9 km drive from Friends Arena and
            14 km from Sergels Torg Square.
          </p>
          <p>
            Explore nearby attractions like the Army Museum, just 15 km away,
            and The Royal Palace, situated 15 km from this charming home. For
            convenience, Bromma Stockholm Airport is the closest airport,
            located just 8 km away from this stylish and spacious family
            retreat.
          </p>
        </div>
        <div className="part-2">
          <p>
            Your stay at our hotel includes a complimentary breakfast to
            kickstart your day, and our rooms offer a cosy and comfortable
            retreat. Select rooms feature a relaxing bath tub for added luxury.
          </p>
          <p>
            Our dedicated staff is at your service, ensuring a seamless and
            enjoyable experience throughout your stay. In addition to the
            inviting accommodations, indulge in extra leisure activities such as
            our fitness centre or pool. We've thoughtfully curated every aspect
            to make your stay special, promising a combination of comfort,
            convenience, and delightful extras.
          </p>
        </div>
      </div>
      <div className="cont">
        <div className="part1-content">
          <h4>Amenities</h4>
          <div className="boxes">
            <div className="box">
              <div className="img">
                <img src={require("../../../assets/wifi.png")} alt="" />
              </div>
              <div className="content">
                <p>Free Wifi</p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={require("../../../assets/car.png")} alt="" />
              </div>
              <div className="content">
                <p>Parking available</p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img
                  src={require("../../../assets/chopsticks-fork.png")}
                  alt=""
                />
              </div>
              <div className="content">
                <p>Restaurant</p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={require("../../../assets/dumbbell.png")} alt="" />
              </div>
              <div className="content">
                <p>Fitness center</p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={require("../../../assets/tub.png")} alt="" />
              </div>
              <div className="content">
                <p>Bathroom</p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={require("../../../assets/single-bed.png")} alt="" />
              </div>
              <div className="content">
                <p>Room service</p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={require("../../../assets/heavy-wind.png")} alt="" />
              </div>
              <div className="content">
                <p>Air Conditioning</p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={require("../../../assets/tea-drink.png")} alt="" />
              </div>
              <div className="content">
                <p>Tea/coffee machine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
