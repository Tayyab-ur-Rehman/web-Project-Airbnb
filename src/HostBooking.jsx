import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Store } from './dataStorage.js';
import './component/style/HostBooking.css'; // Import the CSS file for styling

function HostBooking() {
    const { current } = Store();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/booking/host/${current._id}`);
                const data = Array.isArray(response.data) ? response.data : []; // Ensure data is an array
                setBookings(data);
                console.log('API Response:', response);
            } catch (error) {
                console.error("Error fetching bookings", error);
            }
        };

        fetchBookings();
    }, [current._id]);

    return (
        <div className="host-booking-container">
            <h1 className="heading">Host Booking</h1>
            {Array.isArray(bookings) && bookings.length > 0 ? (
                <ul className="bookings-list">
                    {bookings.map((booking) => (
                        <li key={booking._id} className="booking-item">
                            <p className="booking-detail"><strong>Booking ID:</strong> {booking._id}</p>
                            <p className="booking-detail"><strong>Listing ID:</strong> {booking.listingId}</p>
                            <p className="booking-detail"><strong>Guest number:</strong> {booking.guest}</p>
                            <p className="booking-detail"><strong>Check-in Date:</strong> {booking.checkIn}</p>
                            <p className="booking-detail"><strong>Check-out Date:</strong> {booking.checkOut}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No bookings found.</p>
            )}
        </div>
    );
}

export default HostBooking;
