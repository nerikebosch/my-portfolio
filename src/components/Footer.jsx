import React from 'react';
import { personalInfo } from '../data/personalInfo';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="ghibli-footer">
      <div className="container footer-container">
        
        {/* Brand & Note */}
        <div className="footer-brand-section">
          <div className="footer-logo">
            <span className="footer-icon">🍃</span>
            <span className="footer-name">{personalInfo.name}</span>
          </div>
          <p className="footer-motto">
            Crafted with curiosity, care, and a spirit of adventure.
          </p>
        </div>

        {/* Footer Quick Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Back to top & Copyright */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {CURRENT_YEAR} {personalInfo.name}. All rights reserved.
          </p>
          <button 
            type="button" 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label="Back to top of page"
          >
            <span>Top of page</span>
            <span className="arrow-up">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
