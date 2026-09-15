import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import '../css/Hero.css';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-tag">NEW COLLECTION</span>
          <h1 className="hero-title">
            STYLE THAT<br />
            <span className="hero-highlight">STANDS OUT</span>
          </h1>
          <p className="hero-description">
            Discover fresh fashion and everyday products made for your style.
          </p>
          <div className="hero-buttons">
            <Button variant="primary" onClick={() => navigate('/shop')}>
              Shop Now
            </Button>
            <Button variant="outline" onClick={() => navigate('/categories')}>
              Explore
            </Button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80"
              alt="Urban style collection"
              className="hero-image"
            />
            <div className="hero-badge">30% OFF</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
