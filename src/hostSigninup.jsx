import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './component/style/SigninUp.css';
import {Store} from './dataStorage.js';


function HostSignInSignUp() { 
  const navigate = useNavigate();
  const {setCurrent,setRoleHost} = Store();
  const [formData, setFormData] = useState({ hostname: '', email: '', password: '' });
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Sign In

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        // Sign Up
        const response = await axios.post('http://localhost:3000/host/signup', {
          name: formData.username,
          email: formData.email,
          password: formData.password,
        });
        if (response.status === 201 || response.status === 204 || response.status === 200) {
          setIsSignUp(false);
        }
        else
        {
          alert(response.data.message);
        }
       
      } else {
        // Sign In
        console.log(formData.password);
        const response = await axios.post('http://localhost:3000/host/signin', {
          email: formData.email,
          password: formData.password,
        });
        if(response.status === 200){
          console.log(response.data);
           setCurrent(response.data);

           setRoleHost();
           navigate('/HostHome');
        }
        
         // alert(response.data.message);
        


      }
    } catch (error) {
      console.error(`${isSignUp ? 'Sign up' : 'Sign in'} error:`, error.response ? error.response.data : error.message);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="form-container">
        
         <div> 
         <img src='/airbnb.svg'  /> 
          <h2 className="form-header">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

         </div>
      <form onSubmit={handleSubmit} className="form">
        {isSignUp && (
          <input
            type="text"
            name="hastname"
            placeholder="hostname"
            value={formData.username}
            onChange={handleChange}
            className="input-field"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <button onClick={toggleMode} className="toggle-button">
        {isSignUp ? 'Already have an account? Sign In' : 'Do`t have an account? Sign Up'}
      </button>
    </div>
  );
}

export default HostSignInSignUp;