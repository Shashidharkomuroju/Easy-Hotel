import React from "react";
import image1 from "../../../assets/Flight Photo.png";
import image2 from "../../../assets/Flight Photo1.png";
import image3 from "../../../assets/Flight Photo2.png";
import image4 from "../../../assets/Flight Photo3.png";
import image5 from "../../../assets/Flight Photo4.png";
import image6 from "../../../assets/Flight Photo5.png";
import image7 from "../../../assets/Flight Photo6.png";
import image8 from "../../../assets/Flight Photo7.png";

const Home5 = () => {
  const data = [
    {
      id: 1,
      ProductName: "Flight",
      ProductImage: image1,
    },
    {
      id: 2,
      ProductName: "Location",
      ProductImage: image2,
    },
    {
      id: 3,
      ProductName: "Hotel",
      ProductImage: image3,
    },
    {
      id: 4,
      ProductName: "Package",
      ProductImage: image4,
    },
    {
      id: 5,
      ProductName: "Seasonal",
      ProductImage: image5,
    },
    {
      id: 6,
      ProductName: "Camps",
      ProductImage: image6,
    },
    {
      id: 7,
      ProductName: "Backpacking",
      ProductImage: image7,
    },
    {
      id: 8,
      ProductName: "Hostels",
      ProductImage: image8,
    },
  ];
  return (
    <>
      <div className="home4">
        <div className="home4-heading">
          <h2>Compare The Highest Reviewed Past Offers</h2>
          <h5>Browse By Type</h5>
        </div>
        <div className="home4-card">
          {data.map((item) => {
            return (
              <section4-box key={item.id}>
                <img src={item.ProductImage} alt="" />
                <h3>{item.ProductName}</h3>
              </section4-box>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home5;
