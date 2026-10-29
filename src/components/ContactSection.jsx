import React, { useState } from 'react';
import { personalInfo } from '../data/personalInfo';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    if (personalInfo.email) {
      navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate warm submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-badge">
            <span>📬</span>
            <span>Say Hello</span>
          </span>
          <h2 className="section-title-large">Get In Touch</h2>
          <div className="wood-divider"></div>
          <p className="section-subtitle-text">
            Have a project in mind, an opportunity to discuss, or just want to talk tech and biomedical science?
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Contact Info from personalInfo.js */}
          <div className="contact-info-panel">
            <div className="panel-inner">
              <span className="panel-leaf">🌿</span>
              <h3 className="panel-title">Let's connect and create</h3>
              <p className="panel-desc">
                Whether you have an idea for collaboration or just want to say hi,
                my inbox is always open.
              </p>

              {/* Direct Info List */}
              <div className="contact-cards-list">
                
                {/* Email Card */}
                {personalInfo.email && (
                  <div className="contact-card-item">
                    <div className="contact-card-icon">✉️</div>
                    <div className="contact-card-body">
                      <span className="card-label">Email Address</span>
                      <a href={`mailto:${personalInfo.email}`} className="card-value link-email">
                        {personalInfo.email}
                      </a>
                    </div>
                    <button 
                      type="button" 
                      onClick={handleCopyEmail} 
                      className="copy-email-btn"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                )}

                {/* Location Card */}
                {personalInfo.location && (
                  <div className="contact-card-item">
                    <div className="contact-card-icon">📍</div>
                    <div className="contact-card-body">
                      <span className="card-label">Location</span>
                      <span className="card-value">{personalInfo.location}</span>
                    </div>
                  </div>
                )}

                {/* Phone Card (optional) */}
                {personalInfo.phone && (
                  <div className="contact-card-item">
                    <div className="contact-card-icon">📞</div>
                    <div className="contact-card-body">
                      <span className="card-label">Phone</span>
                      <a href={`tel:${personalInfo.phone}`} className="card-value">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Channels */}
              <div className="social-links-section">
                <span className="social-label">Find me on other branches:</span>
                <div className="social-pills-row">
                  {personalInfo.socials.github && (
                    <a 
                      href={personalInfo.socials.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-pill"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}

                  {personalInfo.socials.linkedin && (
                    <a 
                      href={personalInfo.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-pill"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}

                  {personalInfo.socials.twitter && (
                    <a 
                      href={personalInfo.socials.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-pill"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                      <span>Twitter / X</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Note / Contact Form */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="ghibli-contact-form">
              <h3 className="form-title">Send a Dispatch</h3>
              <p className="form-subtitle">Drop a note directly to my message desk.</p>

              {formSubmitted ? (
                <div className="form-success-banner">
                  <span className="success-icon">🕊️</span>
                  <div>
                    <h4>Message Dispatched!</h4>
                    <p>Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="form-row-duo">
                    <div className="form-group">
                      <label htmlFor="contact-name">Your Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Chihiro"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email">Your Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. name@domain.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Collaboration, job inquiry, or hello..."
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Your Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your note here..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-send-message">
                    <span>Send Message</span>
                    <span className="send-icon">🍃</span>
                  </button>
                </>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
