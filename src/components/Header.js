// // src/Header.js
// import React from "react";
// import { Link as ScrollLink } from 'react-scroll';
// import { Link } from "react-router-dom"; // Assuming you'll use React Router
// import "./Header.css";
// import profileImage from '../images/profile.jpeg';

// // import profileImage from "./assets/profile.png";

// const Header = () => {
//   return (
//     <header>
//       <div className="profile">
//         <img
//           src={profileImage}
//           alt="Your Profile"
//           className="profile-image"
//         />
//       </div>
//       <nav>
//         <ul className="nav-links heading">
//           <li>
//           <ScrollLink to="about" smooth={true} duration={300} className="nav-link hover-text">
//           About Me
//           </ScrollLink>
//           </li>
//           <li>
//           <ScrollLink to="project" smooth={true} duration={300} className="nav-link hover-text">
//           Projects
//           </ScrollLink>
//           </li>
//           <li>
//           <ScrollLink to="contact" smooth={true} duration={300} className="nav-link hover-text">
//           Contact
//           </ScrollLink>
//           </li>
//         </ul>
//       </nav>
//       <div className="social-links ico">
//         <a href="https://github.com/vrmaverick" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-github social-icon hover-text"></i>
//         </a>
//         <a href="https://www.linkedin.com/in/vedant-ranade-683867271/" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-linkedin social-icon hover-text"></i>
//         </a>
//         <a href="https://www.instagram.com/vedant.iso/" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-instagram social-icon hover-text"></i>
//         </a>
//         <a href="https://twitter.com/vr_maverick" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-twitter social-icon hover-text"></i>
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;

// src/Header.js
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";
import profileImage from "../images/profile.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-left">
        <img
          src={profileImage}
          alt="Your Profile"
          className="profile-image"
        />
        <span className="logo-text">Vedant</span>
      </div>

      {/* Desktop nav */}
      {/* <nav className="nav-desktop">
        <ul className="nav-links">
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={300}
              className="nav-link"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="project"
              smooth={true}
              duration={300}
              className="nav-link"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={300}
              className="nav-link"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav> */}
      <nav className="nav-desktop">
  <ul className="nav-links">
    <li>
      <ScrollLink
        to="about"
        smooth={true}
        duration={300}
        className="nav-link"
      >
        About
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="project"
        smooth={true}
        duration={300}
        className="nav-link"
      >
        Projects
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="experience"
        smooth={true}
        duration={300}
        className="nav-link"
      >
        Experience
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="resume"
        smooth={true}
        duration={300}
        className="nav-link"
      >
        Resume
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={300}
        className="nav-link"
      >
        Contact
      </ScrollLink>
    </li>
  </ul>
</nav>


      {/* Social icons */}
      <div className="social-links">
        <a
          href="https://github.com/vrmaverick"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/vedant-ranade-683867271/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin social-icon" />
        </a>
        <a
          href="https://www.instagram.com/vedant.iso/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram social-icon" />
        </a>
        <a
          href="https://twitter.com/vr_maverick"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter social-icon" />
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className={`menu-line ${isOpen ? "open" : ""}`} />
        <span className={`menu-line ${isOpen ? "open" : ""}`} />
        <span className={`menu-line ${isOpen ? "open" : ""}`} />
      </button>

      {/* Mobile dropdown */}
      {/* <nav className={`nav-mobile ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={300}
              className="nav-link"
              onClick={closeMenu}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="project"
              smooth={true}
              duration={300}
              className="nav-link"
              onClick={closeMenu}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={300}
              className="nav-link"
              onClick={closeMenu}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav> */}
      <nav className={`nav-mobile ${isOpen ? "show" : ""}`}>
  <ul>
    <li>
      <ScrollLink
        to="about"
        smooth={true}
        duration={300}
        className="nav-link"
        onClick={closeMenu}
      >
        About
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="project"
        smooth={true}
        duration={300}
        className="nav-link"
        onClick={closeMenu}
      >
        Projects
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="experience"
        smooth={true}
        duration={300}
        className="nav-link"
        onClick={closeMenu}
      >
        Experience
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="resume"
        smooth={true}
        duration={300}
        className="nav-link"
        onClick={closeMenu}
      >
        Resume
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={300}
        className="nav-link"
        onClick={closeMenu}
      >
        Contact
      </ScrollLink>
    </li>
  </ul>
</nav>

    </header>
  );
};

export default Header;
