import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Button from '../components/Button';
import '../css/Services.css';

function Services() {
  const servicesList = [
    {
      icon: '🌐',
      title: 'Web Development',
      desc: 'Building responsive, fast, and secure websites tailored to meet your unique project requirements.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      desc: 'Creating visually engaging, easy-to-use user interfaces that provide memorable user experiences.'
    },
    {
      icon: '⚛️',
      title: 'React Development',
      desc: 'Engineering interactive single-page applications with reusable components and clean state management.'
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      desc: 'Improving your online visibility with strategic search optimization, content planning, and analytics.'
    },
    {
      icon: '📱',
      title: 'App Development',
      desc: 'Developing lightweight and reliable web applications that perform seamlessly on any mobile or desktop screen.'
    },
    {
      icon: '☁️',
      title: 'Cloud & Hosting',
      desc: 'Reliable setup, configuration, and continuous deployment assistance for all modern web frameworks.'
    }
  ];

  return (
    <div className="services-page">
      <Hero
        title="Our Services"
        subtitle="Explore our comprehensive range of web development and digital design services crafted for modern businesses."
        primaryBtnText="Get in Touch"
        primaryBtnLink="/contact"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
      />

      <section className="section services-grid-section">
        <div className="container">
          <div className="section-title">
            <h2>Solutions We Provide</h2>
            <p>Practical, reliable, and scalable web solutions designed for success</p>
          </div>

          <div className="services-cards-grid">
            {servicesList.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <Link to="/contact">
                  <Button variant="outline">Inquire Now</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
