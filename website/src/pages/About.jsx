import React from 'react';
import Hero from '../components/Hero';
import '../css/About.css';

function About() {
  return (
    <div className="about-page">
      <Hero
        title="About WebCraft"
        subtitle="Learn more about our journey, core values, and our commitment to clear and accessible web development."
        primaryBtnText="Meet Our Team"
        primaryBtnLink="/team"
        secondaryBtnText="Contact Us"
        secondaryBtnLink="/contact"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
      />

      <section className="section about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <h2>Who We Are</h2>
              <p>
                Founded in 2021, WebCraft began with a simple philosophy: web development 
                does not have to be overly convoluted. We focus on writing clean, readable code, 
                building intuitive user interfaces, and delivering lightweight web applications.
              </p>
              <p>
                Whether you are a developer looking for inspiration or a business seeking 
                a reliable digital presence, we believe in straightforward, reliable solutions.
              </p>
            </div>
            <div className="about-story-image">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80"
                alt="Our team collaborating"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Purpose</h2>
            <p>Guided by clear principles and forward-thinking vision</p>
          </div>

          <div className="about-values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower beginners and professionals alike by building web solutions 
                that prioritize simplicity, maintainability, and clean architecture without unnecessary bloat.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To become a trusted reference point for clean web design, inspiring 
                creators everywhere to build functional, beautiful, and accessible web experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
