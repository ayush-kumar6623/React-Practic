import React from 'react';
import '../css/Counter.css';

function Counter() {
  const stats = [
    { number: '500+', label: 'Products' },
    { number: '250+', label: 'Happy Customers' },
    { number: '30+', label: 'Brands' },
    { number: '1000+', label: 'Orders' },
  ];

  return (
    <section className="counter-section">
      <div className="counter-container">
        {stats.map((item, index) => (
          <div key={index} className="counter-item">
            <h3 className="counter-number">{item.number}</h3>
            <p className="counter-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Counter;
