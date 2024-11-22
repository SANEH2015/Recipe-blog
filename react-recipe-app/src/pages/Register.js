// src/pages/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/useSlice'; // Redux action to update state
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // For HTTP requests

const API_URL = 'http://localhost:5000/users'; // Your API URL

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [error, setError] = useState(''); // Error state for feedback
  const [successMessage, setSuccessMessage] = useState(''); // Success message

  // Handle the form submission for registration
  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = { name, surname, email, password };

    try {
      // First check if the user already exists
      const response = await axios.get(`${API_URL}?email=${email}`);
      if (response.data.length > 0) {
        setError('User already registered. Please sign in.');
        return;
      }

      // Generate a unique ID for the user (based on timestamp or any unique logic)
      const userId = new Date().getTime().toString(); // Simple user ID based on timestamp

      // Create new user with the generated user ID
      const newUser = { ...userData, id: userId };

      // Save the user data to the server (or mock API)
      await axios.post(API_URL, newUser);

      // Dispatch Redux action to store user data
      dispatch(registerUser(newUser));

      // Set success message and navigate to sign in page
      setSuccessMessage('Successfully registered! Redirecting to sign-in page...');
      setTimeout(() => {
        navigate('/signin'); // Navigate to the sign-in page
      }, 2000); // Delay before redirecting to give user time to read the message
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ marginBottom: '20px' }}>Register</h1>
      {error && <p style={{ color: 'red', marginBottom: '20px' }}>{error}</p>} {/* Error message */}
      {successMessage && <p style={{ color: 'green', marginBottom: '20px' }}>{successMessage}</p>} {/* Success message */}
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '400px',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
        onSubmit={handleRegister}
      >
        <label style={{ marginBottom: '10px' }}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Surname:
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Enter your surname"
            style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ marginBottom: '20px' }}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          Sign Up
        </button>
      </form>

      {/* Links below the form */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <button
          onClick={() => navigate('/signin')} // Navigate to sign-in page
          style={{
            backgroundColor: 'transparent',
            color: '#007BFF',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Already have an account? Sign In
        </button>

        <button
          onClick={() => alert("Forgot password functionality coming soon!")} // You can replace this with your forgot password page
          style={{
            backgroundColor: 'transparent',
            color: '#007BFF',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
            marginTop: '10px',
          }}
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
}
