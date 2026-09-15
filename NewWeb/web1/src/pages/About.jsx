import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import '../css/About.css';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-text-col">
            <span className="about-tag">OUR STORY</span>
            <h1 className="about-title">Shopping Made Simple</h1>
            <p className="about-intro">
              UrbanCart was founded with a singular focus: bringing sleek, minimalist aesthetics and dependable quality together into one seamless shopping destination.
            </p>

            <div className="about-section-block">
              <h3 className="block-title">Why UrbanCart?</h3>
              <p className="block-text">
                We believe you shouldn't have to scroll through cluttered marketplaces to discover timeless style. Every piece in our catalog is handpicked for quality, comfort, and striking modern design.
              </p>
            </div>

            <div className="about-section-block">
              <h3 className="block-title">Our Mission</h3>
              <p className="block-text">
                To empower your individuality with premium fashion, electronics, and accessories at accessible prices, backed by transparent service and swift doorstep delivery.
              </p>
            </div>

            <div className="about-btn-wrap">
              <Button variant="primary" onClick={() => navigate('/shop')}>
                Explore Our Collection
              </Button>
            </div>
          </div>

          <div className="about-image-col">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
                alt="UrbanCart Store Experience"
                className="about-image"
              />
              <div className="about-experience-badge">
                <span className="badge-num">100%</span>
                <span className="badge-lbl">Authentic Styles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
