import React from 'react';
import Hero from '../components/Hero';
import '../css/Gallery.css';

function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: 'Modern Workstation',
      category: 'Workspace',
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Design Collaboration',
      category: 'Design',
      url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Brainstorming Session',
      category: 'Teamwork',
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Code Editor & Syntax',
      category: 'Development',
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Mobile App Prototyping',
      category: 'Mobile',
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      category: 'Data',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 7,
      title: 'Creative Strategy',
      category: 'Planning',
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 8,
      title: 'Minimal Desk Setup',
      category: 'Workspace',
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 9,
      title: 'Interactive UI Wireframes',
      category: 'Design',
      url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 10,
      title: 'Cloud Network Systems',
      category: 'Technology',
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 11,
      title: 'Product Review Meeting',
      category: 'Collaboration',
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 12,
      title: 'Software Development',
      category: 'Engineering',
      url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 13,
      title: 'Modern Office Space',
      category: 'Workspace',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 14,
      title: 'Design Thinking Session',
      category: 'Creative',
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="gallery-page">
      <Hero
        title="Project Gallery"
        subtitle="Browse through our curated collection of web projects, workspace environments, and design highlights."
        primaryBtnText="Start a Project"
        primaryBtnLink="/contact"
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80"
      />

      <section className="section gallery-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Visual Showcase</h2>
            <p>14 curated snapshots from our recent creative work and office life</p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="gallery-image-box">
                  <img src={item.url} alt={item.title} loading="lazy" />
                </div>
                <div className="gallery-info">
                  <span className="gallery-category">{item.category}</span>
                  <h3 className="gallery-title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
