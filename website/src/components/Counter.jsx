import React from 'react';
import '../css/Counter.css';

function Counter({
  stats = [
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '10+', label: 'Services Offered' },
    { value: '5+', label: 'Years Experience' }
  ]
}) {
  return (
    <section className="counter-section">
      <div className="container">
        <div className="counter-grid">
          {stats.map((stat, index) => (
            <div key={index} className="counter-card">
              <h3 className="counter-value">{stat.value}</h3>
              <p className="counter-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;
