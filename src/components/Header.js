// src/Header.js
import React from "react";
import { Link as ScrollLink } from 'react-scroll';
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
          <ScrollLink to="about" smooth={true} duration={300} className="nav-link hover-text">
          About Me
          </ScrollLink>
          </li>
          <li>
          <ScrollLink to="project" smooth={true} duration={300} className="nav-link hover-text">
          Projects
          </ScrollLink>
          </li>
          <li>
          <ScrollLink to="contact" smooth={true} duration={300} className="nav-link hover-text">
          Contact
          </ScrollLink>
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
        <a href="https://www.instagram.com/vedant.iso/" target="_blank" rel="noopener noreferrer">
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
