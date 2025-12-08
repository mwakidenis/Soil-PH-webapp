import React from 'react';
import logo from '../assets/logo.png'; // Placeholder for logo

const Header = () => (
  <header className="header">
    <img src={logo} alt="Soil pH Tracker Logo" className="logo" />
    <h1>🌱Soil pH Tracking Web-App🌾</h1>
  </header>
);

export default Header;