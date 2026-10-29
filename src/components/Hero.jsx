import React from 'react';
import { personalInfo } from '../data/personalInfo';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        
        {/* Left Column: Introductions & Actions */}
        <div className="hero-content">
          {/* Availability Badge */}
          {personalInfo.isAvailable && (
            <div className="status-pill">
              <span className="pulse-dot"></span>
              <span className="status-text">{personalInfo.status}</span>
            </div>
          )}

          <div className="hero-greetings">
            <span className="greeting-sub">Welcome to my corner of the web 🍃</span>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight-name">{personalInfo.name}</span>
            </h1>
          </div>

          <h2 className="hero-role">{personalInfo.role}</h2>
          
          <p className="hero-tagline">
            {personalInfo.tagline}
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn-ghibli-primary">
              <span className="btn-icon">🌲</span>
              <span>Explore My Work</span>
            </a>
            
            <a href="#contact" className="btn-ghibli-secondary">
              <span className="btn-icon">📬</span>
              <span>Get in Touch</span>
            </a>

            {personalInfo.socials.github && (
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-ghibli-icon"
                title="View GitHub Profile"
                aria-label="GitHub Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}

            {personalInfo.socials.linkedin && (
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-ghibli-icon"
                title="View LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            )}
          </div>

          {/* Quick stats / Highlights */}
          <div className="hero-quick-facts">
            <div className="fact-item">
              <span className="fact-number">11+</span>
              <span className="fact-label">Diverse Projects</span>
            </div>
            <div className="fact-divider"></div>
            <div className="fact-item">
              <span className="fact-number">3+</span>
              <span className="fact-label">Core Domains</span>
            </div>
            <div className="fact-divider"></div>
            <div className="fact-item">
              <span className="fact-number">🌱</span>
              <span className="fact-label">Craft & Care</span>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image with Wood/Botanical Frame */}
        <div className="hero-visual">
          <div className="image-frame-outer">
            <div className="image-frame-wood">
              <img 
                className="hero-avatar" 
                src="/images/nerike_foto.jpg" 
                alt={personalInfo.name} 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hero-avatar-fallback" style={{ display: 'none' }}>
                <span className="fallback-initials">NB</span>
              </div>
            </div>
            
            {/* Whimsical decorative badges */}
            <div className="floating-badge badge-top-right">
              <span className="badge-icon">🌿</span>
              <span>Nature & Logic</span>
            </div>
            
            <div className="floating-badge badge-bottom-left">
              <span className="badge-icon">✨</span>
              <span>Curious Mind</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
