import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/background.jpg'; // Correct import from src

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      console.log('Login successful with:', email, password);
      navigate('/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundImage: `url(${bgImage})`, // Use imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '20px',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#1e1e1e',
    borderRadius: '12px',
    maxWidth: '400px',
    width: '100%',
    padding: '40px 30px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    backdropFilter: 'blur(5px)',
  };

  const inputContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    margin: '10px auto',
    position: 'relative',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    marginTop: '20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#0077ff',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    transition: '0.3s',
  };

  const toggleStyle = {
    cursor: 'pointer',
    color: '#0077ff',
    fontSize: '12px',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ marginBottom: '10px' }}>InterviewAce</h1>
        <p style={{ fontSize: '14px', marginBottom: '30px', color: '#555' }}>
          Master your next interview with AI
        </p>

        <form onSubmit={handleSubmit}>
          <div style={inputContainerStyle}>
            <input
              style={inputStyle}
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div style={inputContainerStyle}>
            <input
              style={{ ...inputStyle, paddingRight: '60px' }}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              style={{
                ...toggleStyle,
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>

        <p style={{ fontSize: '12px', marginTop: '20px', color: '#555' }}>
          Don't have an account?{' '}
          <span
            style={{ color: '#0077ff', cursor: 'pointer' }}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
