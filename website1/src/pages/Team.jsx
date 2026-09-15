import React from 'react';
import Hero from '../components/Hero';
import Counter from '../components/Counter';
import Button from '../components/Button';
import '../css/Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Morgan',
    position: 'Lead Developer',
    desc: 'Passionate about clean component architecture, web performance, and writing beginner-friendly code.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Sophia Chen',
    position: 'UI/UX Designer',
    desc: 'Focuses on intuitive design systems, accessible color schemes, and seamless user experiences.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Marcus Vance',
    position: 'React Specialist',
    desc: 'Specializes in state management, custom React hooks, and building reusable interface blocks.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    name: 'Emily Davis',
    position: 'Project Manager',
    desc: 'Ensures our projects are delivered smoothly, on time, and aligned with our clients goals.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  }
];

function Team() {
  return (
    <div className="team-page">
      <Hero 
        title="Meet Our Creative Team"
        subtitle="The friendly people dedicated to building simple, elegant, and reliable web applications."
        primaryBtnText="Join Our Team"
        primaryBtnLink="/contact"
        secondaryBtnText="View Services"
        secondaryBtnLink="/services"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
      />

      <section className="section-container">
        <div className="section-header">
          <h2>Our Core Members</h2>
          <p>A small, collaborative team driven by simplicity and quality craftsmanship.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-img-wrapper">
                <img src={member.image} alt={member.name} className="team-img" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.position}</span>
                <p className="team-desc">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Counter 
        title="Our Team Accomplishments"
        stats={[
          { value: '4', label: 'Core Specialists' },
          { value: '500+', label: 'Commits Pushed' },
          { value: '100%', label: 'Dedicated Focus' },
          { value: '24/7', label: 'Friendly Support' }
        ]} 
      />

      <section className="team-cta-section">
        <div className="section-container team-cta-container">
          <h2>Want to collaborate with us?</h2>
          <p>We are always eager to meet enthusiastic builders and visionary clients.</p>
          <Button to="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Team;
