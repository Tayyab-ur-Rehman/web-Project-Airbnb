import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignInSignUp() 
{

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
        alert(response.data.message);
      } else {
        // Sign In
        const response = await axios.post('http://localhost:8080/api/signin',
           {
          email: formData.email,
          password: formData.password,
        }
      );
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
    <div>
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button onClick={toggleMode}>
        {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
      </button>
    </div>
  );
}

export default SignInSignUp;
