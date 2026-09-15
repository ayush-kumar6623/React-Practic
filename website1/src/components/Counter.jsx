import React from 'react';
import '../css/Counter.css';

const defaultStats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '10+', label: 'Services Offered' },
  { value: '5+', label: 'Years Experience' }
];

function Counter({ stats = defaultStats, title = 'Our Milestones' }) {
  return (
    <section className="counter-section">
      <div className="counter-container">
        {title && <h3 className="counter-title">{title}</h3>}
        <div className="counter-grid">
          {stats.map((item, index) => (
            <div key={index} className="counter-card">
              <h2 className="counter-number">{item.value}</h2>
              <p className="counter-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;
