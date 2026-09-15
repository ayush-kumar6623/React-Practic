import React from 'react';
import Hero from '../components/Hero';
import '../css/Gallery.css';

const galleryItems = [
  {
    id: 1,
    title: 'Developer Workspace',
    category: 'Workspace',
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Team Brainstorming',
    category: 'Teamwork',
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    category: 'Technology',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Creative Collaboration',
    category: 'Meetings',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Tech Office Space',
    category: 'Office',
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'Web Wireframing',
    category: 'Design',
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    title: 'Minimal Studio',
    category: 'Workspace',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    title: 'Mobile Development',
    category: 'Technology',
    url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 9,
    title: 'Interactive Workshop',
    category: 'Teamwork',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 10,
    title: 'Product Strategy',
    category: 'Planning',
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 11,
    title: 'UI Concept Sketch',
    category: 'Design',
    url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 12,
    title: 'Digital Networking',
    category: 'Technology',
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 13,
    title: 'Clean Code Editor',
    category: 'Coding',
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 14,
    title: 'Design Critique',
    category: 'Design',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 15,
    title: 'Group Discussion',
    category: 'Meetings',
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80'
  }
];

function Gallery() {
  return (
    <div className="gallery-page">
      <Hero 
        title="Project & Team Gallery"
        subtitle="Browse through snapshots of our projects, creative workshops, modern tools, and workspaces."
        primaryBtnText="Our Services"
        primaryBtnLink="/services"
        secondaryBtnText="Get in Touch"
        secondaryBtnLink="/contact"
        image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80"
      />

      <section className="section-container">
        <div className="section-header">
          <h2>Photo Gallery</h2>
          <p>A collection of 15 visual highlights from our projects and daily creative routine.</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-card">
              <div className="gallery-img-container">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  loading="lazy" 
                  className="gallery-img"
                />
              </div>
              <div className="gallery-card-body">
                <span className="gallery-category">{item.category}</span>
                <h3 className="gallery-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
