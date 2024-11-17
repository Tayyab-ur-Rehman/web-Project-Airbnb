import React, { useState } from 'react';
import axios from 'axios';

function SignIn({ setToken }) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/signin', credentials);
      setToken(response.data.token);
      alert('Signed in successfully');
    } catch (error) {
      console.error('Sign in error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;
