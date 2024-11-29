import PropTypes from 'prop-types';
import './style/detailComponent.css';
import { useNavigate } from 'react-router-dom';

function Detail_temp({ img, location, text, guests, bedrooms, bathrooms, costPerNight, id }) {
  const navigate = useNavigate();
  return (
    <div id="detail-container">
      <img src={img} alt={location} id="detail-image" />
      <div id="detail-content">
        <h2>{location}</h2>
        <p>{text}</p>
        <div id="detail-info">
          <p>👤 Guests: {guests}</p>
          <p>🛏️ Bedrooms: {bedrooms}</p>
          <p>🛁 Bathrooms: {bathrooms}</p>
        </div>
        <h3 id="detail-price">Cost Per Night: ${costPerNight}</h3>
        <button id="detail-button" 
        onClick={()=>navigate(`/Booking/${id}`)}
        >Book Now</button>
      </div>
    </div>
  );
}

export default Detail_temp;
