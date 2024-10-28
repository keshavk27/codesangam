import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Quizzers</h1>
      <div className="login-options">
        <Link to="/student-login" className="login-btn">Student Login</Link>
        <Link to="/admin-login" className="login-btn">Admin Login</Link>
      </div>
    </div>
  );
};

export default Home;
