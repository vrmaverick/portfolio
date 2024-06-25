import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Email: <a href="mailto:vedantranade2612@gmail.com">vedantranade2612@gmail.com</a></p>
        </div>
        <div className="social-linkss">
          <a href="https://github.com/vrmaverick" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github social-icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/vedant-ranade-683867271/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin social-icon"></i>
          </a>
          <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram social-icon"></i>
          </a>
          <a href="https://twitter.com/vr_maverick" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter social-icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
