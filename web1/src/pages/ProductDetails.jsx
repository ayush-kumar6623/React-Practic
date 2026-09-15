import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMinus, FiPlus, FiShoppingBag, FiTruck, FiShield } from 'react-icons/fi';
import Button from '../components/Button';
import { productsData } from '../data/products';
import '../css/ProductDetails.css';

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist or has been removed.</p>
        <Button variant="primary" onClick={() => navigate('/shop')}>
          Back to Shop
        </Button>
      </div>
    );
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    alert("Product added to cart");
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
  };

  const handleBuyNow = () => {
    alert("Thank you for choosing this product");
  };

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        <Link to="/shop" className="back-link">
          <FiArrowLeft size={18} /> Back to Shop
        </Link>

        <div className="product-details-grid">
          <div className="product-image-section">
            <div className="main-image-wrapper">
              <img src={product.image} alt={product.name} className="main-product-image" />
              <span className="product-category-badge">{product.category}</span>
            </div>
          </div>

          <div className="product-info-section">
            <span className="info-category">{product.category}</span>
            <h1 className="info-title">{product.name}</h1>

            <div className="info-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= product.rating ? 'star-filled' : 'star-empty'}
                >
                  ★
                </span>
              ))}
              <span className="rating-text">({product.rating}.0 rating based on verified purchases)</span>
            </div>

            <div className="info-price-wrapper">
              <span className="info-price">₹{product.price}</span>
              <span className="info-tax-note">Inclusive of all taxes</span>
            </div>

            <p className="info-description">{product.description}</p>

            <div className="quantity-wrapper">
              <span className="quantity-label">Quantity:</span>
              <div className="quantity-control">
                <button
                  type="button"
                  className="qty-btn"
                  onClick={handleDecrease}
                  aria-label="Decrease quantity"
                >
                  <FiMinus size={16} />
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  type="button"
                  className="qty-btn"
                  onClick={handleIncrease}
                  aria-label="Increase quantity"
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>

            <div className="action-buttons-group">
              <Button variant="primary" onClick={handleAddToCart} className="btn-large">
                <FiShoppingBag size={18} /> Add to Cart
              </Button>
              <Button variant="outline" onClick={handleBuyNow} className="btn-large">
                Buy Now
              </Button>
            </div>

            <div className="details-perks">
              <div className="perk-item">
                <FiTruck className="perk-icon" size={20} />
                <span>Free standard delivery on orders above ₹1,999</span>
              </div>
              <div className="perk-item">
                <FiShield className="perk-icon" size={20} />
                <span>Original authentic product guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
