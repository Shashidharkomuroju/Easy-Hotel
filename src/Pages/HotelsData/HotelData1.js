import React, { useState } from "react";
import hotels1 from "../Data/Hotels1";
import "./HotelsStyle.css";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const HotelData1 = () => {
  const [locationFilter, setLocationFilter] = useState("");
  const [minRatingFilter, setMinRatingFilter] = useState(false);
  const [maxPriceFilter, setMaxPriceFilter] = useState(false);
  const [distanceFilter, setDistanceFilter] = useState([]);

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.checked ? e.target.value : "");
  };

  const handleMinRatingChange = (e) => {
    setMinRatingFilter(e.target.checked ? parseFloat(e.target.value) : false);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPriceFilter(e.target.checked ? parseFloat(e.target.value) : false);
  };

  const handleDistanceChange = (e) => {
    const value = parseFloat(e.target.value);
    setDistanceFilter((prevDistances) =>
      prevDistances.includes(value)
        ? prevDistances.filter((distance) => distance !== value)
        : [...prevDistances, value]
    );
  };

  const filteredHotels = hotels1.filter((hotel) => {
    const matchesLocation = locationFilter
      ? hotel.location.includes(locationFilter)
      : true;
    const matchesRating = minRatingFilter
      ? hotel.rating >= minRatingFilter
      : true;
    const matchesPrice = maxPriceFilter
      ? hotel.pricePerNight <= maxPriceFilter
      : true;
    const matchesDistance = distanceFilter.length
      ? distanceFilter.some(
          (distance) => hotel.distanceFromCityCenter <= distance
        )
      : true;
    return matchesLocation && matchesRating && matchesPrice && matchesDistance;
  });

  return (
    <>
      <div className="full-page">
        <div className="filters">
          <div className="filter-location">
            <label>
              <h4>
                <u>Location:</u>
              </h4>
            </label>
            <label>
              <input
                type="checkbox"
                value="New York, NY"
                onChange={handleLocationChange}
              />
              New York, NY
            </label>
            <label>
              <input
                type="checkbox"
                value="Malibu, CA"
                onChange={handleLocationChange}
              />
              Malibu, CA
            </label>
            <label>
              <input
                type="checkbox"
                value="Aspen, CO"
                onChange={handleLocationChange}
              />
              Aspen, CO
            </label>
            <label>
              <input
                type="checkbox"
                value="San Francisco, CA"
                onChange={handleLocationChange}
              />
              San Francisco, CA
            </label>
            <label>
              <input
                type="checkbox"
                value="Scottsdale, AZ"
                onChange={handleLocationChange}
              />
              Scottsdale, AZ
            </label>
          </div>
          <div className="filter-rating">
            <h4>
              <u>Rating:</u>
            </h4>
            <label>
              <input
                type="checkbox"
                value="4.5"
                onChange={handleMinRatingChange}
              />
              Minimum Rating 4.5
            </label>
            <label>
              <input
                type="checkbox"
                value="4.7"
                onChange={handleMinRatingChange}
              />
              Minimum Rating 4.7
            </label>
            <label>
              <input
                type="checkbox"
                value="4.8"
                onChange={handleMinRatingChange}
              />
              Minimum Rating 4.8
            </label>
          </div>
          <div className="filter-price">
            <h4>
              <u>Price</u>
            </h4>
            <label>
              <input
                type="checkbox"
                value="25000"
                onChange={handleMaxPriceChange}
              />
              Price Under Rs: 25000/-
            </label>
            <label>
              <input
                type="checkbox"
                value="30000"
                onChange={handleMaxPriceChange}
              />
              Price Under Rs: 30000/-
            </label>
            <label>
              <input
                type="checkbox"
                value="35000"
                onChange={handleMaxPriceChange}
              />
              Price Under Rs: 35000/-
            </label>
          </div>
          <div className="filter-distance">
            <h4><u>Distance</u></h4>
          <label>
            <input type="checkbox" value="1.5" onChange={handleDistanceChange} />
            Within 1.5 km
          </label>
          <label>
            <input type="checkbox" value="3.0" onChange={handleDistanceChange} />
            Within 3 km
          </label>
          <label>
            <input type="checkbox" value="5.0" onChange={handleDistanceChange} />
            Within 5 km
          </label>
          <label>
            <input type="checkbox" value="10.0" onChange={handleDistanceChange} />
            Within 10 km
          </label>
        </div>
        </div>
        <div className="hotel1-list">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="hotel1-page">
              <div className="hotel1-image">
                <Link to={`/Novotel/${hotel.id}`}>
                  <img src={hotel.image} alt="" style={{ width: "300px" }} />
                </Link>
              </div>
              <div className="hotel1-content">
              <Link to={`/Novotel/${hotel.id}`}><h3>{hotel.name}</h3></Link>
                <p>Location: {hotel.location}</p>
                <p>
                  Distance From CityCenter: {hotel.distanceFromCityCenter}Km
                </p>
                <div className="hotel1-rating">
                  <h5>Rating :{hotel.rating}</h5>
                </div>
                <div className="hotel1-price">
                  <p>Price; Rs: {hotel.pricePerNight}/-</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HotelData1;
