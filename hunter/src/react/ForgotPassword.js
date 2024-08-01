// src/react/ForgotPassword.js

import React, { useState } from 'react';
import { resetPassword } from '../api';
import { Link } from 'react-router-dom';
import './ForgotPassword.css'; // Import the CSS file for styling

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      // Implement OTP verification and new password setting logic here
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h1 className="forgot-password-title">Forgot Password</h1>
        <form onSubmit={handleResetPassword} className="forgot-password-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="forgot-password-input"
          />
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="OTP"
            required
            className="forgot-password-input"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            required
            className="forgot-password-input"
          />
          <button type="submit" className="forgot-password-button">Reset Password</button>
        </form>
        <p className="forgot-password-text">
          Remembered your password? <Link to="/" className="forgot-password-link">Login</Link>
        </p>
        <p className="forgot-password-text">
          Don't have an account? <Link to="/register" className="forgot-password-link">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
