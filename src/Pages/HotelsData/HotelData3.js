import React, { useState } from 'react'
import "./HotelsStyle.css";
import hotels3 from '../Data/Hotels3';
import { Link } from "react-router-dom";
import Footer from '../../Components/Footer/Footer';

const HotelData3 = () => {

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

  const filteredHotels = hotels3.filter((hotel) => {
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
                value="Napa Valley, CA"
                onChange={handleLocationChange}
              />
              Napa Valley, CA
            </label>
            <label>
              <input
                type="checkbox"
                value="Los Angeles, CA"
                onChange={handleLocationChange}
              />
              Los Angeles, CA
            </label>
            <label>
              <input
                type="checkbox"
                value="Honolulu, HI"
                onChange={handleLocationChange}
              />
              Honolulu, HI
            </label>
            <label>
              <input
                type="checkbox"
                value="Boston, MA"
                onChange={handleLocationChange}
              />
              Boston, MA
            </label>
            <label>
              <input
                type="checkbox"
                value="San Diego, CA"
                onChange={handleLocationChange}
              />
              San Diego, CA
            </label>
          </div>
          <div className="filter-rating">
            <h4>
              <u>Rating:</u>
            </h4>
            <label>
              <input
                type="checkbox"
                value="4.4"
                onChange={handleMinRatingChange}
              />
              Minimum Rating 4.4
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
                value="2000"
                onChange={handleMaxPriceChange}
              />
              Price Under Rs: 2000/-
            </label>
            <label>
              <input
                type="checkbox"
                value="3000"
                onChange={handleMaxPriceChange}
              />
              Price Under Rs: 3000/-
            </label>
            <label>
              <input
                type="checkbox"
                value="4000"
                onChange={handleMaxPriceChange}
              />
              Price Under Rs: 4000/-
            </label>
          </div>
          <div className="filter-distance">
            <h4>
              <u>Distance</u>
            </h4>
            <label>
              <input
                type="checkbox"
                value="1.0"
                onChange={handleDistanceChange}
              />
              Within 1.0 km
            </label>
            <label>
              <input
                type="checkbox"
                value="3.0"
                onChange={handleDistanceChange}
              />
              Within 3 km
            </label>
            <label>
              <input
                type="checkbox"
                value="5.0"
                onChange={handleDistanceChange}
              />
              Within 6 km
            </label>
          </div>
        </div>
        <div className="hotel1-list">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="hotel1-page">
              <div className="hotel1-image">
                <Link to={`/Shashi/${hotel.id}`}>
                  <img src={hotel.image} alt="" style={{ width: "300px" }} />
                </Link>
              </div>
              <div className="hotel1-content">
                <Link to={`/Shashi/${hotel.id}`}>
                  <h3>{hotel.name}</h3>
                </Link>
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
          <Footer/>
</>
  )
}

export default HotelData3