import React, { useState } from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import '../css/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully");
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <Hero 
        title="Get in Touch"
        subtitle="Have a question or want to work together? Send us a message or visit our office."
        primaryBtnText="Explore Services"
        primaryBtnLink="/services"
        secondaryBtnText="Read FAQ"
        secondaryBtnLink="/faq"
        image="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=700&q=80"
      />

      <section className="section-container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Fill out the form below or find us on the map.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-form-container">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Enter your name" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Enter your email" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Write your message here..." 
                  required 
                ></textarea>
              </div>

              <Button type="submit" variant="primary">
                Send Message
              </Button>
            </form>
          </div>

          <div className="contact-info-map-container">
            <div className="contact-details-box">
              <h3>Office Details</h3>
              <p><strong>Address:</strong> 123 Tech Street, Silicon City, CA</p>
              <p><strong>Email:</strong> hello@simpleweb.example</p>
              <p><strong>Phone:</strong> +1 (555) 234-5678</p>
              <p><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
            </div>

            <div className="map-wrapper">
              <iframe
                title="Office Location Map"
                src="https://maps.google.com/maps?q=San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
