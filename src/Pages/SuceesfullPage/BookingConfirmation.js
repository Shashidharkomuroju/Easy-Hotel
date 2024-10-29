// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const BookingConfirmation = () => {
//     const navigate = useNavigate();

//     useEffect(()=>{
//         const timer = setTimeout(()=>{
//             navigate("/landing")
//         } , 3000);
//         return () =>clearTimeout(timer);
//     }, [navigate])
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//     <h1>Hotel Booked!</h1>
//     <p>You will be redirected to the home page shortly...</p>
//   </div>
//   )
// }

// export default BookingConfirmation


/////////////////// old code ////////////

// import React, { useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const BookingConfirmation = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   // Log location state to see what data is passed
//   console.log("BookingConfirmation - location.state:", location.state);

//   const { formData, cardData, totalPrice, hotelName, checkInDate, checkOutDate } = location.state || {};

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     navigate("/landing");
//   //   }, 8000);
//   //   return () => clearTimeout(timer);
//   // }, [navigate]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Hotel Booked!</h1>
//       <h2>Booking Details</h2>
//       {formData ? (
//         <div>
//           <p><strong>Hotel Name:</strong> {hotelName}</p>
//           <p><strong>Name:</strong> {formData.name}</p>
//           <p><strong>Email:</strong> {formData.email}</p>
//           <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
//           <p><strong>Check-In Date:</strong> {checkInDate}</p>
//           <p><strong>Check-Out Date:</strong> {checkOutDate}</p>
//           <p><strong>Total Price:</strong> Rs. {totalPrice}/-</p>
//         </div>
//       ) : (
//         <p>No booking details available. Please try again.</p>
//       )}
//       <p>You will be redirected to the home page shortly...</p>
//     </div>
//   );
// };

// export default BookingConfirmation;


/////////New Code///////

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const BookingConfirmation = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   // Destructure the state passed via navigate from NovotelDetails.js
//   const {
//     formData,
//     cardData,
//     totalPrice,
//     hotelName,
//     checkInDate,
//     checkOutDate,
//   } = location.state || {}; // Handle undefined state
  
//   // If location state is empty or undefined, redirect to home or another page
//   if (!formData || !cardData) {
//     navigate("/"); // Redirect to home if data is missing
//     return null;
//   }

//   return (
//     <div className="confirmation-page">
//       <h2>Booking Confirmation</h2>
      
//       <div className="confirmation-details">
//         <h3>Hotel Details</h3>
//         <p><strong>Hotel Name:</strong> {hotelName}</p>
//         <p><strong>Check-In Date:</strong> {checkInDate}</p>
//         <p><strong>Check-Out Date:</strong> {checkOutDate}</p>
//         <p><strong>Total Price:</strong> Rs. {totalPrice}/-</p>
//       </div>

//       <div className="customer-details">
//         <h3>Customer Information</h3>
//         <p><strong>Name:</strong> {formData.name}</p>
//         <p><strong>Email:</strong> {formData.email}</p>
//         <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
//       </div>

//       <div className="payment-details">
//         <h3>Payment Details</h3>
//         <p><strong>Card Number:</strong> **** **** **** {cardData.cardNumber.slice(-4)}</p> 
//         <p><strong>Expiration Date:</strong> {cardData.expirationDate}</p>
//       </div>

//       <div className="confirmation-message">
//         <h4>Your booking has been confirmed! Thank you for choosing our service.</h4>
//       </div>
//     </div>
//   );
// };

// export default BookingConfirmation;

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingConfirmation.css";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure the state passed via navigate from NovotelDetails.js
  const {
    formData,
    cardData,
    totalPrice,
    hotelName,
    checkInDate,
    checkOutDate,
  } = location.state || {}; // Handle undefined state

   useEffect(() => {
   const timer = setTimeout(() => {
     navigate("/landing");
      }, 10000);
   return () => clearTimeout(timer);
    }, [navigate]);
  
  // If location state is empty or undefined, redirect to home immediately
  if (!formData || !cardData) {
    navigate("/");
    return null;
  }

  // Timer: Redirect to the home page after 10 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/");
  //   }, 10000); // 10 seconds delay

  //   // Cleanup the timer on component unmount
  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <h2>Booking Confirmation</h2>
        
        <div className="confirmation-details">
          <h3>Hotel Details</h3>
          <p><strong>Hotel Name:</strong> {hotelName}</p>
          <p><strong>Check-In Date:</strong> {checkInDate}</p>
          <p><strong>Check-Out Date:</strong> {checkOutDate}</p>
          <p><strong>Total Price:</strong> Rs. {totalPrice}/-</p>
        </div>

        <div className="customer-details">
          <h3>Customer Information</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
        </div>

        <div className="payment-details">
          <h3>Payment Details</h3>
          <p><strong>Card Number:</strong> **** **** **** {cardData.cardNumber.slice(-4)}</p>
          <p><strong>Expiration Date:</strong> {cardData.expirationDate}</p>
        </div>

        <div className="confirmation-message">
          <h4>Your booking has been confirmed! You will be redirected to the homepage shortly.</h4>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;


