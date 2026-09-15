import React from 'react';
import Button from './Button';
import '../css/Hero.css';

function Hero({
  title = 'Build Modern Websites with Simplicity',
  subtitle = 'A simple, clean and beginner-friendly React application showcasing core components, routing, and modern UI patterns.',
  primaryBtnText = 'Get Started',
  primaryBtnLink = '/services',
  secondaryBtnText = 'Learn More',
  secondaryBtnLink = '/about',
  image = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80'
}) {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-actions">
            {primaryBtnText && (
              <Button to={primaryBtnLink} variant="primary">
                {primaryBtnText}
              </Button>
            )}
            {secondaryBtnText && (
              <Button to={secondaryBtnLink} variant="secondary">
                {secondaryBtnText}
              </Button>
            )}
          </div>
        </div>
        {image && (
          <div className="hero-image-wrapper">
            <img src={image} alt="Hero" className="hero-image" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
