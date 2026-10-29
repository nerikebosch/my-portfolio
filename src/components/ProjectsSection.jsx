import React, { useState } from 'react';
import { portfolioProjects } from '../data/projects.js';
import './ProjectsSection.css';

// Aesthetic icons and gradients for each category when local images aren't present
const CATEGORY_META = {
  'Medical Imaging': {
    icon: '🔬',
    themeClass: 'theme-medical',
    gradient: 'linear-gradient(135deg, #2e4a34, #4a6b52)'
  },
  'HealthTech': {
    icon: '🩺',
    themeClass: 'theme-health',
    gradient: 'linear-gradient(135deg, #784e37, #9c674b)'
  },
  'Full Stack Web': {
    icon: '🌐',
    themeClass: 'theme-web',
    gradient: 'linear-gradient(135deg, #38593f, #608068)'
  },
  'IoT & Embedded': {
    icon: '⚡',
    themeClass: 'theme-iot',
    gradient: 'linear-gradient(135deg, #8a5738, #b87a55)'
  },
  'Mobile App': {
    icon: '📱',
    themeClass: 'theme-mobile',
    gradient: 'linear-gradient(135deg, #44594c, #6c8a77)'
  },
  'Data Science': {
    icon: '🧬',
    themeClass: 'theme-data',
    gradient: 'linear-gradient(135deg, #533e32, #7a5f4f)'
  }
};

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [failedImages, setFailedImages] = useState({});

  // Extract unique categories
  const categories = ['All', ...new Set(portfolioProjects.map(p => p.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory);

  const handleImageError = (id) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-badge">
            <span>🌲</span>
            <span>Handcrafted Work & Inventions</span>
          </span>
          <h2 className="section-title-large">Featured Projects</h2>
          <div className="wood-divider"></div>
          <p className="section-subtitle-text">
            A collection of systems across medical imaging, biomedical telemetry, full-stack platforms, and algorithm design.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters-wrapper">
          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'All' && <span className="cat-bullet">🍃</span>}
                {cat !== 'All' && (
                  <span className="cat-bullet">
                    {CATEGORY_META[cat]?.icon || '🌿'}
                  </span>
                )}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const meta = CATEGORY_META[project.category] || {
              icon: '🌿',
              themeClass: 'theme-default',
              gradient: 'linear-gradient(135deg, #523525, #784e37)'
            };
            const isImageFailed = failedImages[project.id];

            return (
              <article className="project-card" key={project.id}>
                
                {/* Visual Header / Image with Fallback */}
                <div className="project-card-header">
                  {!isImageFailed ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      onError={() => handleImageError(project.id)}
                      loading="lazy"
                    />
                  ) : null}

                  {/* Fallback Banner with Ghibli/Nature Aesthetic */}
                  {isImageFailed && (
                    <div 
                      className="project-fallback-banner" 
                      style={{ background: meta.gradient }}
                    >
                      <div className="banner-decor-ring"></div>
                      <span className="banner-icon">{meta.icon}</span>
                      <span className="banner-cat-title">{project.category}</span>
                    </div>
                  )}

                  {/* Floating Category Stamp */}
                  <span className="project-category-stamp">
                    <span className="stamp-icon">{meta.icon}</span>
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Content Details */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Tech Stack Badges */}
                  <div className="tech-stack">
                    {project.techStack.map((tech, idx) => (
                      <span className="tech-tag" key={idx}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links / Buttons */}
                  <div className="project-links">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-project btn-project-primary"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-project btn-project-secondary"
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
