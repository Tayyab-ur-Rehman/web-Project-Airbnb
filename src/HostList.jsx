import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {Store} from './dataStorage.js';
import './component/style/HostList.css'

function HostList() {
  const {current} = Store();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    about: '',
    image: '',
    bedrooms: '',
    bathrooms: '',
    guests: '',
    category: 'Beachfront',
  });

  const categories = [
    "Beachfront", "Luxury Villas", "Rustic Cabins", "Urban Lofts", "Pet-Friendly", 
    "Tiny Homes", "Treehouses", "Farm Stays", "City Apartments", "Ski Chalets", 
    "Lakefront", "Eco-Friendly", "Historic Homes", "Business Stays", "Adventure Hubs", 
    "Family-Friendly", "Romantic Getaways", "Mountain Retreats", "Glamping", "Budget Stays"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/listing/host', 
      {
        title: formData.title,
        hostId: current._id,
        price: formData.price,
        location: formData.location,
        about: formData.about,
        image: formData.image,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        guests: formData.guests,
        category: formData.category,  
      }
    );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <div>
      <img id="logo"src='/airbnb.svg'  /> 
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </div>
      <div>
        <label>About:</label>
        <input type="text" name="about" value={formData.about} onChange={handleChange} />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
      </div>
      <div>
        <label>Bedrooms:</label>
        <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
      </div>
      <div>
        <label>Bathrooms:</label>
        <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
      </div>
      <div>
        <label>Guests:</label>
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} />
      </div>
      <div>
        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default HostList;



