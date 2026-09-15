import React from 'react';
import Hero from '../components/Hero';
import Counter from '../components/Counter';
import Button from '../components/Button';
import '../css/About.css';

function About() {
  return (
    <div className="about-page">
      <Hero 
        title="About SimpleWeb"
        subtitle="Learn more about who we are, our core mission, and our vision for simple web solutions."
        primaryBtnText="Contact Team"
        primaryBtnLink="/contact"
        secondaryBtnText="Meet The Team"
        secondaryBtnLink="/team"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
      />

      <section className="section-container about-intro-section">
        <div className="about-grid">
          <div className="about-image-col">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" 
              alt="Our workspace and team" 
              className="about-main-img"
            />
          </div>
          <div className="about-text-col">
            <h2>Who We Are</h2>
            <p>
              SimpleWeb is a dedicated group of enthusiastic developers and designers.
              We believe great websites don't have to be overly complex. With clean code,
              thoughtful layouts, and intuitive user interfaces, we deliver reliable solutions.
            </p>
            <p>
              Whether you are an individual creator or a growing business, we strive to make
              your digital journey seamless, fast, and enjoyable.
            </p>
            <Button to="/services" variant="primary">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      <Counter title="Our Proven Track Record" />

      <section className="section-container mission-vision-section">
        <div className="section-header">
          <h2>Mission & Vision</h2>
          <p>The core values guiding our work each and every day.</p>
        </div>

        <div className="cards-grid">
          <div className="mv-card">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To empower individuals and organizations by providing modern, high-quality,
              and easy-to-use web solutions without unnecessary complications or bloat.
            </p>
          </div>

          <div className="mv-card">
            <div className="mv-icon">🚀</div>
            <h3>Our Vision</h3>
            <p>
              To become a trusted partner in digital development, making clean technology
              accessible, friendly, and effective for communities worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
