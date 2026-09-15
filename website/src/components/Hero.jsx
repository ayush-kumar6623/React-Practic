import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../css/Hero.css';

function Hero({
  title,
  subtitle,
  primaryBtnText,
  primaryBtnLink,
  onPrimaryClick,
  secondaryBtnText,
  secondaryBtnLink,
  onSecondaryClick,
  image = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80'
}) {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-actions">
            {primaryBtnText && primaryBtnLink && (
              <Link to={primaryBtnLink}>
                <Button variant="primary">{primaryBtnText}</Button>
              </Link>
            )}
            {primaryBtnText && onPrimaryClick && !primaryBtnLink && (
              <Button variant="primary" onClick={onPrimaryClick}>
                {primaryBtnText}
              </Button>
            )}

            {secondaryBtnText && secondaryBtnLink && (
              <Link to={secondaryBtnLink}>
                <Button variant="secondary">{secondaryBtnText}</Button>
              </Link>
            )}
            {secondaryBtnText && onSecondaryClick && !secondaryBtnLink && (
              <Button variant="secondary" onClick={onSecondaryClick}>
                {secondaryBtnText}
              </Button>
            )}
          </div>
        </div>
        {image && (
          <div className="hero-image-wrapper">
            <img src={image} alt="Hero visual" className="hero-image" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
