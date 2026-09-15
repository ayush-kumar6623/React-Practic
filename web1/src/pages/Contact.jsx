import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import Button from '../components/Button';
import '../css/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="contact-header-container">
          <span className="contact-tag">GET IN TOUCH</span>
          <h1 className="contact-title">Contact Our Team</h1>
          <p className="contact-subtitle">
            Have questions about your order or want to collaborate? We would love to hear from you.
          </p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-main-grid">
          <div className="contact-info-col">
            <h2 className="info-col-title">Reach Us Directly</h2>
            <p className="info-col-desc">
              Our customer care specialists are available 24/7 to resolve inquiries and ensure a smooth shopping experience.
            </p>

            <div className="info-items-list">
              <div className="info-item">
                <div className="info-icon-box">
                  <FiMail size={22} />
                </div>
                <div>
                  <h4 className="info-item-label">Email Us</h4>
                  <a href="mailto:support@urbancart.com" className="info-item-value">
                    support@urbancart.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <FiPhone size={22} />
                </div>
                <div>
                  <h4 className="info-item-label">Call Us</h4>
                  <a href="tel:+919876543210" className="info-item-value">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <FiMapPin size={22} />
                </div>
                <div>
                  <h4 className="info-item-label">Headquarters</h4>
                  <p className="info-item-value">
                    42 Tech Plaza, MG Road, Bengaluru, Karnataka 560001
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <FiClock size={22} />
                </div>
                <div>
                  <h4 className="info-item-label">Working Hours</h4>
                  <p className="info-item-value">
                    Monday – Sunday: 9:00 AM – 9:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <h2 className="form-col-title">Send a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 00000"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  required
                  className="form-textarea"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="submit-btn">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="contact-map-section">
          <h3 className="map-title">Locate Our Flagship Store</h3>
          <div className="map-wrapper">
            <iframe
              title="UrbanCart Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985558914614!2d77.60803127599026!3d12.972776814856983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168074d22bb7%3A0xb35a09e078beae11!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
