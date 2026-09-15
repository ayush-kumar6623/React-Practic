import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { categoriesData } from '../data/products';
import '../css/Categories.css';

function Categories() {
  return (
    <div className="categories-page">
      <div className="categories-header">
        <div className="categories-header-container">
          <span className="categories-tag">CURATED DEPARTMENTS</span>
          <h1 className="categories-title">All Categories</h1>
          <p className="categories-subtitle">
            Browse through our premium collections designed to elevate your everyday lifestyle.
          </p>
        </div>
      </div>

      <div className="categories-container">
        <div className="large-categories-grid">
          {categoriesData.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              showDescription={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
