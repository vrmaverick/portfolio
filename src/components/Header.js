// src/Header.js
import React from "react";
import { Link } from "react-router-dom"; // Assuming you'll use React Router
import "./Header.css";
import profileImage from '../images/profile.png';

// import profileImage from "./assets/profile.png";

const Header = () => {
  return (
    <header>
      <div className="profile">
        <img
          src={profileImage}
          alt="Your Profile"
          className="profile-image"
        />
      </div>
      <nav>
        <ul className="nav-links heading">
          <li>
            <Link to="/about" className="hover-text">About Me</Link>
          </li>
          <li>
            <Link to="/contact" className="hover-text">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover-text">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="social-links ico">
        <a href="https://github.com/vrmaverick" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github social-icon hover-text"></i>
        </a>
        <a href="https://www.linkedin.com/in/vedant-ranade-683867271/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin social-icon hover-text"></i>
        </a>
        <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram social-icon hover-text"></i>
        </a>
        <a href="https://twitter.com/vr_maverick" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter social-icon hover-text"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
