import PropTypes from 'prop-types';
import './style/detailComponent.css';

Detail_temp.propTypes = {
    img: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    guests: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    costPerNight: PropTypes.number.isRequired,
  };

function Detail_temp({ img, location, text, guests, bedrooms, bathrooms, costPerNight }) {
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
        //onClick={} link to a 3rd page 
        >Book This Place</button>
      </div>
    </div>
  );
}

export default Detail_temp;
