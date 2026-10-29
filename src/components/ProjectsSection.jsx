import React from 'react';
import { portfolioProjects } from '../data/projects.js'; // <-- Notice the curly braces!
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      
      <div className="projects-grid">
        {portfolioProjects.map((project) => (
          <div className="project-card" key={project.id}>
            
            {/* The Image */}
            <img src={project.image} alt={project.title} className="project-image" />
            
            {/* The Details */}
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              {/* Loop through the tech stack array */}
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span className="tech-tag" key={index}>{tech}</span>
                ))}
              </div>
              
              {/* Project Links */}
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                  GitHub
                </a>
                {/* Only show Live Demo button if the link actually exists */}
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    Live Demo
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;