import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';
import '../css/Shop.css';

function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const categories = [
    'All',
    'Fashion',
    'Electronics',
    'Shoes',
    'Watches',
    'Bags',
    'Accessories'
  ];

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="shop-page">
      <div className="shop-header">
        <div className="shop-header-container">
          <span className="shop-tag">OUR CATALOG</span>
          <h1 className="shop-title">Discover All Products</h1>
          <p className="shop-subtitle">
            Explore {productsData.length} premium essentials designed with modern aesthetics.
          </p>

          <div className="search-bar-wrapper">
            <FiSearch className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search products by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchTerm('')}
              >
                <FiX size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="shop-container">
        <div className="category-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${selectedCategory.toLowerCase() === cat.toLowerCase() ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="results-count-bar">
          <span>
            Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'}
          </span>
          {selectedCategory !== 'All' && (
            <span className="active-filter-indicator">
              Category: <strong>{selectedCategory}</strong>
            </span>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="no-products-found">
            <h3>No products found</h3>
            <p>Try searching for something else or reset your filter.</p>
            <button
              type="button"
              className="filter-reset-btn"
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
