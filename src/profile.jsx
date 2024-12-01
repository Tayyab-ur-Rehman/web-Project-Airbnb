import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Store} from './dataStorage.js';
import './component/style/profile.css';

const Profile = () => {
    const {current} = Store();
    const [bookings, setBookings] = useState([]);
    const [bookedListings, setBookedListings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/booking/user/${current._id}`);
                setBookings(response.data.allBooking);
                setBookedListings(response.data.allListing);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

console.log(bookedListings);
console.log(bookings);

return (
    <div className="profile-container">
        <div className="profile-header">
            <h1 className="profile-title">Profile</h1>
            <div className="profile-details">
                <p><strong>Name:</strong> {current.name}</p>
                <p><strong>Email:</strong> {current.email}</p>
            </div>
        </div>

        <div className="profile-bookings">
            <h2 className="bookings-title">Your Bookings</h2>
            <ul className="bookings-list">
                {bookings.map((booking, index) => (
                    <li key={index} className="booking-item">
                        <div className="booking-info">
                            <p><strong>Check-In:</strong> {booking.checkIn}</p>
                            <p><strong>Check-Out:</strong> {booking.checkOut}</p>
                            <p><strong>Amount:</strong> ${booking.amount}</p>
                        </div>

                        <div className="listing-info">
                            <img
                                src={bookedListings[index].image}
                                alt={bookedListings[index].title}
                                className="listing-image"
                            />
                            <p><strong>Title:</strong> {bookedListings[index].title}</p>
                            <p><strong>About:</strong> {bookedListings[index].about}</p>
                            <p><strong>Guest:</strong> {bookedListings[index].guests}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
};

export default Profile;