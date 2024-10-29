import React, { useState } from "react";
import hotels3 from "../Data/Hotels3";
import { useParams , useNavigate  } from "react-router-dom";
import "./SingleStyle.css";

const ShashiDetails = () => {
  const { id } = useParams();
  const hotel = hotels3.find((hotel) => hotel.id === parseInt(id));
  const navigate = useNavigate();

  // Form validation states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const [cardData, setCardData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    checkInDate: "",
    checkOutDate: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [isBasicInfoSubmitted, setIsBasicInfoSubmitted] = useState(false);
  const [isCardInfoSubmitted, setIsCardInfoSubmitted] = useState(false);

  // Handle input changes for form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  // Basic form validation
  const validateBasicInfo = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phoneNumber: "",
      checkInDate: "",
      checkOutDate: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!phonePattern.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
      isValid = false;
    }

    // Check-in and Check-out date validation
    if (!formData.checkInDate) {
      newErrors.checkInDate = "Check-in date is required";
      isValid = false;
    }
    if (!formData.checkOutDate) {
      newErrors.checkOutDate = "Check-out date is required";
      isValid = false;
    } else if (
      formData.checkInDate &&
      new Date(formData.checkOutDate) <= new Date(formData.checkInDate)
    ) {
      newErrors.checkOutDate = "Check-out date must be after check-in date";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      calculateTotalPrice();
    }

    return isValid;
  };

  // Card validation
  const validateCardInfo = () => {
    let isValid = true;
    const newErrors = {
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    };

    // Card number validation
    const cardPattern = /^[0-9]{12}$/;
    if (!cardData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
      isValid = false;
    } else if (!cardPattern.test(cardData.cardNumber)) {
      newErrors.cardNumber = "Card number must be 12 digits";
      isValid = false;
    }

    // Expiration date validation
    const expDatePattern = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    if (!cardData.expirationDate.trim()) {
      newErrors.expirationDate = "Expiration date is required";
      isValid = false;
    } else if (!expDatePattern.test(cardData.expirationDate)) {
      newErrors.expirationDate = "Expiration date must be MM/YY";
      isValid = false;
    }

    // CVV validation
    const cvvPattern = /^[0-9]{3,4}$/;
    if (!cardData.cvv.trim()) {
      newErrors.cvv = "CVV is required";
      isValid = false;
    } else if (!cvvPattern.test(cardData.cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
      isValid = false;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...newErrors,
    }));

    return isValid;
  };

  // Total price calculation
  const calculateTotalPrice = () => {
    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    const timeDifference = checkOut.getTime() - checkIn.getTime();
    const totalNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const totalPrice = totalNights * hotel.pricePerNight;
    setTotalPrice(totalPrice);
  };

  // Handle basic info submission
  const handleBasicInfoSubmit = (e) => {
    e.preventDefault();
    if (validateBasicInfo()) {
      setIsBasicInfoSubmitted(true);
    }
  };

  // Handle card info submission
  const handleCardInfoSubmit = (e) => {
    e.preventDefault();
    if (validateCardInfo()) {
      setIsCardInfoSubmitted(true);
      navigate("/BookingConfirmation", {
        state: {
          formData,
          cardData,
          totalPrice,
          hotelName: hotel.name,
          checkInDate: formData.checkInDate,
          checkOutDate: formData.checkOutDate,
        },
      });
    }
  };

  if (!hotel) {
    return <div>Hotel not Found</div>;
  }

  return (
    <>
      <div className="single-page">
        <div className="single-img">
          <img src={hotel.image} alt={hotel.name} />
        </div>
        <div className="single-content">
          <h2>{hotel.name}</h2>
          <p>{hotel.description}</p>
          <p>Location: {hotel.location}</p>
          <h5>Rating: {hotel.rating}</h5>
          <p>Bed Type: {hotel.bedType}</p>
          <p>Amenities: {hotel.amenities.join(", ")}</p>
          <p>Distance from City Center: {hotel.distanceFromCityCenter} Km</p>
          <p>Price: Rs. {hotel.pricePerNight}/-</p>
        </div>
      </div>

      <div className="form">
        {!isBasicInfoSubmitted && (
          <form onSubmit={handleBasicInfoSubmit}>
            {/* Form Fields for Basic Info */}
            <div className="inputs-box">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
            </div>
            <div className="inputs-box1">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
            </div>
            <div className="inputs-box2">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <span style={{ color: "red" }}>{errors.phoneNumber}</span>
              )}
            </div>
            <div className="inputs-box3">
              <label>Check-In Date:</label>
              <input
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
              />
              {errors.checkInDate && (
                <span style={{ color: "red" }}>{errors.checkInDate}</span>
              )}
            </div>
            <div className="inputs-box4">
              <label>Check-Out Date:</label>
              <input
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
              />
              {errors.checkOutDate && (
                <span style={{ color: "red" }}>{errors.checkOutDate}</span>
              )}
            </div>
            <button type="submit">Book Now</button>
          </form>
        )}

        {isBasicInfoSubmitted && !isCardInfoSubmitted && (
          <form onSubmit={handleCardInfoSubmit}>
            {/* Card Payment Form */}
            <div className="inputs-box5">
              <label>Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                value={cardData.cardNumber}
                onChange={handleCardChange}
              />
              {errors.cardNumber && (
                <span style={{ color: "red" }}>{errors.cardNumber}</span>
              )}
            </div>
            <div className="inputs-box6">
              <label>Expiration Date (MM/YY):</label>
              <input
                type="text"
                name="expirationDate"
                value={cardData.expirationDate}
                onChange={handleCardChange}
              />
              {errors.expirationDate && (
                <span style={{ color: "red" }}>{errors.expirationDate}</span>
              )}
            </div>
            <div className="inputs-box7">
              <label>CVV:</label>
              <input
                type="text"
                name="cvv"
                value={cardData.cvv}
                onChange={handleCardChange}
              />
              {errors.cvv && <span style={{ color: "red" }}>{errors.cvv}</span>}
            </div>
            <div>
              <h3>Total Price: Rs. {totalPrice}/-</h3>
            </div>
            <button type="submit">Confirm Payment</button>
          </form>
        )}
      </div>
    </>
  );
};

export default ShashiDetails;
