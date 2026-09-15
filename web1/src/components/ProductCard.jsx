import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import '../css/ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    alert("Product added to cart");
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <div className="product-img-wrapper">
        <img src={product.image} alt={product.name} className="product-img" />
      </div>

      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <h4 className="product-title">{product.name}</h4>

        <div className="product-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= product.rating ? 'star-filled' : 'star-empty'}
            >
              ★
            </span>
          ))}
          <span className="rating-score">({product.rating}.0)</span>
        </div>

        <div className="product-bottom">
          <span className="product-price">₹{product.price}</span>
          <Button variant="primary" onClick={handleAddToCart} className="add-cart-btn">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
