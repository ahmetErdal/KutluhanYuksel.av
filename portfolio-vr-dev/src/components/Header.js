import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">VR Game Developer</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/cv">CV</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;