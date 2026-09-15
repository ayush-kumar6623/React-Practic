import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Button from './Button';
import '../css/CategoryCard.css';

function CategoryCard({ category, showDescription = false }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/shop?category=${encodeURIComponent(category.name)}`);
  };

  return (
    <div className={`category-card ${showDescription ? 'large-card' : ''}`} onClick={handleNavigate}>
      <div className="category-image-container">
        <img src={category.image} alt={category.name} className="category-img" />
        <div className="category-overlay"></div>
      </div>

      <div className="category-info">
        <h3 className="category-name">{category.name}</h3>
        {showDescription && (
          <p className="category-desc">{category.description}</p>
        )}
        
        {showDescription ? (
          <div className="category-btn-wrap">
            <Button variant="outline" className="category-explore-btn">
              Explore Category <FiArrowRight size={16} />
            </Button>
          </div>
        ) : (
          <span className="category-arrow-btn">
            Explore <FiArrowRight size={14} />
          </span>
        )}
      </div>
    </div>
  );
}

export default CategoryCard;
