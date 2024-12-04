import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Store } from './dataStorage.js';

function HostBooking() {
    const { current } = Store();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`/booking/host/${current._id}`);
                const data = Array.isArray(response.data) ? response.data : []; // Ensure data is an array
                setBookings(data);
                console.log('API Response:', data);
            } catch (error) {
                console.error("Error fetching bookings", error);
            }
        };

        fetchBookings();
    }, [current._id]);

    return (
        <div>
            <h1>Host Booking</h1>
            {Array.isArray(bookings) && bookings.length > 0 ? (
                <ul>
                    {bookings.map((booking) => (
                        <li key={booking._id}>
                            <p>Booking ID: {booking._id}</p>
                            <p>Listing ID: {booking.listingId}</p>
                            <p>Guest Name: {booking.guestName}</p>
                            <p>Check-in Date: {booking.checkInDate}</p>
                            <p>Check-out Date: {booking.checkOutDate}</p>
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
