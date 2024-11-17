import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style/SigninUp.css';

function SignInSignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Sign In

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        // Sign Up
        const response = await axios.post('http://localhost:8080/api/signup', {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        if (response.status === 201 || response.status === 204 || response.status === 200) {
          const user = { email: formData.email, username: formData.username };
          localStorage.setItem('user', JSON.stringify(user));
        }

        alert(response.data.message);
      } else {
        // Sign In
        const response = await axios.post('http://localhost:8080/api/signin', {
          email: formData.email,
          password: formData.password,
        });
        alert('Signed in successfully');
        navigate('/Home');
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
            name="username"
            placeholder="Username"
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
        {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
      </button>
    </div>
  );
}

export default SignInSignUp;
