import React from 'react';
import Hero from '../components/Hero';
import Counter from '../components/Counter';
import Button from '../components/Button';
import '../css/Home.css';

const previewServices = [
  {
    title: 'Web Development',
    desc: 'Creating fast, responsive, and mobile-friendly websites using modern tools.',
    icon: '💻'
  },
  {
    title: 'UI Design',
    desc: 'Crafting clean, accessible, and intuitive user interfaces for all screens.',
    icon: '🎨'
  },
  {
    title: 'React Development',
    desc: 'Building reusable component-driven applications with smooth routing.',
    icon: '⚛️'
  }
];

const previewGallery = [
  {
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    title: 'Coding Workspace'
  },
  {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    title: 'Team Collaboration'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    title: 'Data & Analytics'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
    title: 'Design Workshop'
  }
];

function Home() {
  return (
    <div className="home-page">
      <Hero 
        title="Welcome to SimpleWeb Studio"
        subtitle="A clean and friendly web development showcase built with React. Simple, modular, and easy to explore."
        primaryBtnText="Explore Services"
        primaryBtnLink="/services"
        secondaryBtnText="View Gallery"
        secondaryBtnLink="/gallery"
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=80"
      />

      <section className="intro-section">
        <div className="intro-container">
          <h2 className="section-heading">About Our Studio</h2>
          <p className="intro-text">
            We specialize in crafting lightweight, easy-to-manage web experiences.
            Our goal is to make the web accessible, modern, and friendly for everyone.
          </p>
          <div className="intro-cta">
            <Button to="/about" variant="secondary">
              Read Our Story
            </Button>
          </div>
        </div>
      </section>

      <Counter title="Our Growth in Numbers" />

      <section className="home-services-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p>Here is a quick look at what we help our clients build.</p>
          </div>
          <div className="services-preview-grid">
            {previewServices.map((service, index) => (
              <div key={index} className="service-preview-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="section-center-btn">
            <Button to="/services" variant="primary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="home-gallery-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Gallery Highlights</h2>
            <p>A small glimpse of our creative work and workspaces.</p>
          </div>
          <div className="gallery-preview-grid">
            {previewGallery.map((item, index) => (
              <div key={index} className="gallery-preview-card">
                <img src={item.url} alt={item.title} />
                <p className="preview-caption">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="section-center-btn">
            <Button to="/gallery" variant="secondary">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="cta-container">
          <h2>Ready to start your next project?</h2>
          <p>Get in touch with us today and let us build something great together.</p>
          <Button to="/contact" variant="primary">
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
