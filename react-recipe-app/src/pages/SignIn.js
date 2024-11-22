import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../features/useSlice'; // Import the signInUser action
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const actionResult = await dispatch(signInUser(userData));
      if (actionResult.type === 'user/signIn/fulfilled') {
        // Handle successful sign-in
        console.log('User signed in with ID:', actionResult.payload.id); // Display user ID
        navigate('/AddRecipe'); // Redirect to home page after sign-in
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ marginBottom: '20px' }}>Sign In</h1>
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
        onSubmit={handleSignIn}
      >
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
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
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
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => navigate('/forgot-password')}
          style={{ background: 'none', border: 'none', color: '#007BFF', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Forgot Password?
        </button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <span>Don't have an account? </span>
        <button
          onClick={() => navigate('/register')}
          style={{ background: 'none', border: 'none', color: '#007BFF', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
