import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Counter from '../components/Counter';
import Button from '../components/Button';
import '../css/Home.css';

function Home() {
  const previewServices = [
    {
      title: 'Web Development',
      desc: 'Modern, fast, and responsive websites built with React and modern web standards.'
    },
    {
      title: 'UI/UX Design',
      desc: 'Clean, user-friendly layouts and interface designs that visitors enjoy using.'
    },
    {
      title: 'App Development',
      desc: 'High-performance web apps with smooth navigation and clean component architecture.'
    }
  ];

  const previewGallery = [
    {
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=80',
      title: 'Modern Coding Setup'
    },
    {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=80',
      title: 'Team Collaboration'
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80',
      title: 'Analytics & Strategy'
    },
    {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80',
      title: 'Data Dashboard'
    }
  ];

  return (
    <div className="home-page">
      <Hero
        title="Build Clean Websites with React"
        subtitle="A beginner-friendly platform demonstrating modern React components, clean navigation, and responsive design."
        primaryBtnText="Our Services"
        primaryBtnLink="/services"
        secondaryBtnText="About Us"
        secondaryBtnLink="/about"
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80"
      />

      <section className="section home-intro-section">
        <div className="container">
          <div className="section-title">
            <h2>Welcome to WebCraft</h2>
            <p>Simple tools, clean code, and effective design for modern web development.</p>
          </div>
          <div className="intro-box">
            <p>
              We craft practical web experiences focused on simplicity and clarity. 
              Our goal is to demonstrate how clean component structures, modular styling, 
              and user-friendly layouts can make any project stand out.
            </p>
          </div>
        </div>
      </section>

      <Counter />

      <section className="section home-services-preview">
        <div className="container">
          <div className="section-title">
            <h2>What We Offer</h2>
            <p>Explore some of our core web solutions</p>
          </div>
          <div className="home-services-grid">
            {previewServices.map((service, index) => (
              <div key={index} className="home-service-card">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to="/services">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            ))}
          </div>
          <div className="center-action">
            <Link to="/services">
              <Button variant="primary">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-gallery-preview">
        <div className="container">
          <div className="section-title">
            <h2>Recent Work & Gallery</h2>
            <p>A quick glimpse of our design and development projects</p>
          </div>
          <div className="home-gallery-grid">
            {previewGallery.map((item, index) => (
              <div key={index} className="preview-image-card">
                <img src={item.url} alt={item.title} />
                <div className="preview-image-info">
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="center-action">
            <Link to="/gallery">
              <Button variant="primary">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-box">
            <h2>Ready to Start Your Project?</h2>
            <p>Have questions or want to collaborate? Get in touch with our friendly team today.</p>
            <Link to="/contact">
              <Button variant="primary">Contact Us Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
