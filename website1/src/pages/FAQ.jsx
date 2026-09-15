import React, { useState } from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import '../css/FAQ.css';

const faqData = [
  {
    id: 1,
    question: 'What technologies are used to build this website?',
    answer: 'This website is built with React.js and React Router. It uses simple vanilla CSS for styling, focusing on clean structure, reusability, and responsiveness without external CSS frameworks.'
  },
  {
    id: 2,
    question: 'Is this website responsive on mobile and tablets?',
    answer: 'Yes! Every page and component uses standard CSS flexbox and grid layouts combined with media queries to ensure smooth viewing on desktops, tablets, and smartphones.'
  },
  {
    id: 3,
    question: 'How do I get started with a project here?',
    answer: 'Simply navigate to our Contact page, fill out the message form with your requirements, and our team will get back to you promptly.'
  },
  {
    id: 4,
    question: 'Are CSS variables used in this project?',
    answer: 'No, this project strictly adheres to normal, direct CSS values for colors, spacing, and sizing to keep the codebase simple and transparent for beginners.'
  },
  {
    id: 5,
    question: 'Can I add more pages and routes easily?',
    answer: 'Yes, adding new pages is straightforward: create a new component in the pages directory and register its route inside App.jsx using React Router.'
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-page">
      <Hero 
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about our development process, tech stack, and services."
        primaryBtnText="Ask a Question"
        primaryBtnLink="/contact"
        secondaryBtnText="Our Services"
        secondaryBtnLink="/services"
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"
      />

      <section className="section-container">
        <div className="section-header">
          <h2>Got Questions?</h2>
          <p>Here are answers to some of the most frequent queries we receive.</p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={item.id} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-more-help">
          <h3>Still have questions?</h3>
          <p>We are here to help. Reach out directly through our contact page.</p>
          <Button to="/contact" variant="primary">
            Contact Support
          </Button>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
