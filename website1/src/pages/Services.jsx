import React from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import '../css/Services.css';

const servicesList = [
  {
    id: 1,
    title: 'Web Development',
    icon: '🌐',
    desc: 'Responsive, fast-loading websites built using modern HTML, CSS, and JavaScript standards for seamless cross-device browsing.'
  },
  {
    id: 2,
    title: 'UI / UX Design',
    icon: '🎨',
    desc: 'Clean, intuitive layouts and user flows designed to enhance usability, retention, and customer delight on every page.'
  },
  {
    id: 3,
    title: 'React Development',
    icon: '⚛️',
    desc: 'Modern Single Page Applications built with modular React components, custom hooks, and dynamic client-side routing.'
  },
  {
    id: 4,
    title: 'Digital Marketing',
    icon: '📈',
    desc: 'Effective digital strategies including search optimization and content planning to help grow your online brand audience.'
  },
  {
    id: 5,
    title: 'App Development',
    icon: '📱',
    desc: 'Cross-platform mobile apps providing swift performance, modern visual interfaces, and offline capabilities.'
  },
  {
    id: 6,
    title: 'Website Maintenance',
    icon: '🛠️',
    desc: 'Ongoing updates, bug fixes, speed enhancements, and technical security maintenance to keep your site running smoothly.'
  }
];

function Services() {
  return (
    <div className="services-page">
      <Hero 
        title="Our Professional Services"
        subtitle="Explore our range of simple, effective digital solutions tailored to bring your creative ideas to life."
        primaryBtnText="Get in Touch"
        primaryBtnLink="/contact"
        secondaryBtnText="View Gallery"
        secondaryBtnLink="/gallery"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80"
      />

      <section className="section-container">
        <div className="section-header">
          <h2>What We Offer</h2>
          <p>Carefully designed services to help you establish a strong web presence.</p>
        </div>

        <div className="services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <div className="service-card-btn">
                <Button to="/contact" variant="outline" className="btn-sm">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
