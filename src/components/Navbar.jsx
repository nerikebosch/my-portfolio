import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/personalInfo';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar container">
        {/* Brand / Logo */}
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-leaf-icon" aria-hidden="true">🌱</span>
          <span className="brand-name">{personalInfo.name}</span>
        </a>

        {/* Mobile Toggle Button */}
        <button 
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-menu ${mobileMenuOpen ? 'menu-open' : ''}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>
            <span className="nav-icon">🍃</span> Home
          </a>
          <a href="#about" className="nav-link" onClick={closeMenu}>
            <span className="nav-icon">📜</span> About
          </a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>
            <span className="nav-icon">🌲</span> Projects
          </a>
          <a href="#contact" className="nav-link nav-link-btn" onClick={closeMenu}>
            <span>Contact Me</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
