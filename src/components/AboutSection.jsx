import React from 'react';
import { personalInfo } from '../data/personalInfo';
import './AboutSection.css';

const AboutSection = () => {
  const { about, skillCategories } = personalInfo;

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-badge">
            <span>📜</span>
            <span>A Glimpse Into My Journey</span>
          </span>
          <h2 className="section-title-large">About Me</h2>
          <div className="wood-divider"></div>
        </div>

        {/* Main About Card */}
        <div className="about-main-card">
          <div className="about-story-col">
            <h3 className="about-headline">{about.heading}</h3>
            <p className="about-lead">{about.intro}</p>
            
            <div className="about-paragraphs">
              {about.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Quote badge */}
            {personalInfo.favoriteQuote && (
              <blockquote className="ghibli-quote-card">
                <p className="quote-text">{personalInfo.favoriteQuote.text}</p>
                <cite className="quote-author">— {personalInfo.favoriteQuote.author}</cite>
              </blockquote>
            )}
          </div>

          {/* Highlights & Pillars */}
          <div className="about-highlights-col">
            <h4 className="highlights-title">What Drives My Work</h4>
            <div className="highlights-grid">
              {about.highlights.map((item, index) => (
                <div className="highlight-card" key={index}>
                  <div className="highlight-icon-box">{item.icon}</div>
                  <div className="highlight-text">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills / Toolkit Section */}
            <div className="toolkit-container">
              <h4 className="toolkit-title">My Toolkit & Disciplines</h4>
              <div className="skill-categories-list">
                {skillCategories.map((cat, catIdx) => (
                  <div className="skill-cat-group" key={catIdx}>
                    <span className="skill-cat-name">{cat.name}</span>
                    <div className="skills-wrap">
                      {cat.skills.map((skill, sIdx) => (
                        <span className="ghibli-skill-tag" key={sIdx}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
