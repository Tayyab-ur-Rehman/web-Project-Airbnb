import React, { useState } from 'react';
import './style/bookingForm.css'; // Make sure to style the component as needed
import axios from "axios" ;
const BookingForm = ({ img, location, text, guests, bedrooms, bathrooms, costPerNight ,id,userid}) => {
  // State to manage form inputs
  const [fullName, setFullName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  
  
  const performBooking = async () => {
    try {
      const response = await axios.post('http://localhost:3000/booking', {
        listingid: id,
        userid: userid,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        cost: costPerNight,
      });

      if (response.status===201) {
        alert('Booking successful!');
      } else {
        alert('Booking failed!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Details:
      Full Name: ${fullName}
      Check-In: ${checkInDate}
      Check-Out: ${checkOutDate}
    `);
  };

  return (
    <div className="booking-form-container">
      <div className="image-container">
        <img src={img} alt="Property" className="property-image" />
        <div className="property-details">
          <h2>{location}</h2>
          <p>{text}</p>
          <p>Guests: {guests}</p>
          <p>Bedrooms: {bedrooms}</p>
          <p>Bathrooms: {bathrooms}</p>
          <p>Cost per Night: ${costPerNight}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkIn">Check-In</label>
          <input
            type="date"
            id="checkIn"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkOut">Check-Out</label>
          <input
            type="date"
            id="checkOut"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>

        <button onClick={performBooking}type="submit" className="submit-button">CONFIRM BOOKING</button>
      </form>
    </div>
  );
};

export default BookingForm;
