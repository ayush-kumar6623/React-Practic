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
        title="Contact Us"
        subtitle="Get in touch with our team. We are always ready to answer your questions and assist with your project."
        primaryBtnText="Explore Services"
        primaryBtnLink="/services"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&auto=format&fit=crop&q=80"
      />

      <section className="section contact-section">
        <div className="container">
          <div className="section-title">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below or find us on the map</p>
          </div>

          <div className="contact-layout">
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ayush kumar"
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
                    placeholder="ayush@gmail.com"
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

            <div className="contact-map-container">
              <div className="map-wrapper">
                <iframe
                  title="Company Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.963859022899!2d80.94701827522405!3d26.904642076652046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd90f852511b%3A0xea3004cdf494ecbb!2sDigiCoders%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1789065901864!5m2!1sen!2sin" 
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="map-info">
                <h4>Office Location</h4>
                <p>2nd Floor, B, 36, near Ram Ram Bank Chauraha, Sector O, Aliganj, Lucknow, Uttar Pradesh 226021</p>
                <p>Support Hours: Mon - Fri, 9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
