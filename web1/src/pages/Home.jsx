import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTruck, FiRotateCcw, FiShield, FiHeadphones } from 'react-icons/fi';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import Counter from '../components/Counter';
import Button from '../components/Button';
import { categoriesData, productsData } from '../data/products';
import '../css/Home.css';

function Home({ onAddToCart }) {
  const navigate = useNavigate();
  const trendingProducts = productsData.slice(0, 8);

  const features = [
    {
      icon: <FiTruck size={28} />,
      title: "Fast Delivery",
      description: "Express shipping at your doorstep within 48 hours."
    },
    {
      icon: <FiRotateCcw size={28} />,
      title: "Easy Returns",
      description: "Hassle-free 7-day instant replacement and returns."
    },
    {
      icon: <FiShield size={28} />,
      title: "Secure Shopping",
      description: "100% safe transactions with advanced SSL security."
    },
    {
      icon: <FiHeadphones size={28} />,
      title: "24/7 Support",
      description: "Dedicated support team ready to assist anytime."
    }
  ];

  return (
    <div className="home-page">
      <Hero />

      <section className="section-container">
        <div className="section-header">
          <div>
            <span className="section-tag">EXPLORE BY CATEGORY</span>
            <h2 className="section-title">Popular Categories</h2>
          </div>
          <Button variant="outline" onClick={() => navigate('/categories')} className="view-all-btn">
            View All
          </Button>
        </div>

        <div className="categories-grid">
          {categoriesData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="section-header">
          <div>
            <span className="section-tag">HANDPICKED FOR YOU</span>
            <h2 className="section-title">Trending Products</h2>
          </div>
          <Button variant="outline" onClick={() => navigate('/shop')} className="view-all-btn">
            View Shop
          </Button>
        </div>

        <div className="products-grid">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      <section className="offer-banner-section">
        <div className="offer-banner-container">
          <div className="offer-content">
            <span className="offer-tag">FLASH SALE</span>
            <h2 className="offer-title">UP TO 40% OFF</h2>
            <p className="offer-subtitle">Grab your favourite products before the offer ends.</p>
          </div>
          <Button variant="primary" onClick={() => navigate('/shop')} className="offer-btn">
            Shop Deals
          </Button>
        </div>
      </section>

      <Counter />

      <section className="section-container">
        <div className="section-header text-center">
          <span className="section-tag">THE URBAN ADVANTAGE</span>
          <h2 className="section-title">Why Shop With Us</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
