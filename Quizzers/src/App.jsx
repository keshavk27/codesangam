import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/adminlogin/adminlogin.jsx';
import Login from './components/studentlogin/Login.jsx';
import Home from './home.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/student-login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
