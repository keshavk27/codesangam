// AdminLogin.js
import React, { useState } from 'react';
import './adminlogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate username and password fields
    if (username.trim() === '' || password.trim() === '') {
      setError('Both fields are required');
      return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic email validation
    if (!emailPattern.test(username)) {
      setError('Please enter a valid email address.');
      return;
    }

    // TODO: Implement actual login logic (e.g., API call)
    console.log('Logging in with:', { username, password });
    setError(''); // Clear any existing error
    alert('Login successful');  };

  return (
    <div className="admin-login">
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
