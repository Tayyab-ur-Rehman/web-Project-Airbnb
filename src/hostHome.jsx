import { useEffect, useState } from 'react';
import axios from 'axios';
import { Store } from './dataStorage.js';
import { useNavigate } from 'react-router-dom';

function HostHome() {
  const { current, listings, setlistings } = Store();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/listings/host/${current._id}`)
      .then((response) => {
        setlistings(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the listings!', error);
      });
  }, [current._id, setlistings]);

  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    navbar: {
      textAlign: 'right',
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      padding: '10px 20px',
      fontSize: '14px',
      borderRadius: '4px',
      margin: '10px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    listingsContainer: {
      maxHeight: '600px', // Restrict the height for scrollable container
      overflowY: 'auto', // Enable vertical scrolling
      padding: '10px',
    },
    listing: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      alignItems: 'flex-start',
      marginBottom: '20px',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
    },
    imageContainer: {
      flexShrink: 0,
      maxWidth: '400px',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '200px', // Fix image height
      objectFit: 'cover', // Prevent image distortion
      borderRadius: '8px',
    },
    details: {
      flexGrow: 1,
    },
    heading: {
      fontSize: '20px',
      color: '#333',
      marginBottom: '10px',
    },
    detailText: {
      margin: '5px 0',
      fontSize: '14px',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <img id="logo" src="/airbnb.svg" alt="Airbnb Logo" />

      <nav style={styles.navbar}>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
          onClick={() => navigate('/hostList')}
        >
          Go to Host List
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
          onClick={() => navigate('/host/booking')}
        >
          Go to Booking List
        </button>
      </nav>

      <div style={styles.listingsContainer}>
        {listings.length === 0 ? (
          <p style={styles.detailText}>No listings available at the moment.</p>
        ) : (
          listings.map((listing) => (
            <div key={listing._id} style={styles.listing}>
              <div style={styles.imageContainer}>
                <img
                  src={listing.image}
                  alt={listing.title}
                  style={styles.image}
                />
              </div>
              <div style={styles.details}>
                <h2 style={styles.heading}>{listing.title}</h2>
                <p style={styles.detailText}>Location: {listing.location}</p>
                <p style={styles.detailText}>Price: ${listing.price}</p>
                <p style={styles.detailText}>{listing.about}</p>
                <p style={styles.detailText}>Bedrooms: {listing.bedrooms}</p>
                <p style={styles.detailText}>Bathrooms: {listing.bathrooms}</p>
                <p style={styles.detailText}>Guests: {listing.guests}</p>
                <p style={styles.detailText}>Category: {listing.category}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HostHome;
