import React, { useState } from 'react';
import './Login.css'; // Optional CSS file for styling

function Login() {
  const [name,setName]=useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlenameChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (username.trim() === '' || password.trim() === '' || name.trim()==='') {
      setError('All fields are required.');
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
    alert('Login successful');
  };

  return (
    
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}

        <div className="form-group">
          <label htmlFor="name"> Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handlenameChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
    
    
  );
}

export default Login;
