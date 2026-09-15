import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import Button from '../components/Button';
import '../css/Cart.css';

function Cart({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const delivery = cartItems.length > 0 ? 99 : 0;
  const total = subtotal + delivery;

  const handleCheckout = () => {
    alert("Checkout Successful");
    if (onClearCart) {
      onClearCart();
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header-row">
          <h1 className="cart-title">Your Shopping Cart</h1>
          <span className="cart-item-count">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {cartItems.length > 0 ? (
          <div className="cart-layout">
            <div className="cart-items-column">
              <div className="cart-items-table-header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
                <span>Action</span>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="cart-item-product">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <span className="cart-item-category">{item.category}</span>
                      <Link to={`/product/${item.id}`} className="cart-item-name">
                        {item.name}
                      </Link>
                    </div>
                  </div>

                  <div className="cart-item-price-unit">
                    <span className="cart-mobile-label">Price:</span>
                    ₹{item.price}
                  </div>

                  <div className="cart-item-qty">
                    <span className="cart-mobile-label">Qty:</span>
                    <div className="qty-picker">
                      <button
                        type="button"
                        className="qty-picker-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <FiMinus size={14} />
                      </button>
                      <span className="qty-picker-num">{item.quantity}</span>
                      <button
                        type="button"
                        className="qty-picker-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-subtotal">
                    <span className="cart-mobile-label">Subtotal:</span>
                    ₹{item.price * item.quantity}
                  </div>

                  <div className="cart-item-remove">
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => onRemoveItem(item.id)}
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <FiTrash2 size={18} />
                      <span className="remove-text">Remove</span>
                    </button>
                  </div>
                </div>
              ))}

              <div className="cart-actions-row">
                <Button variant="dark-outline" onClick={() => navigate('/shop')}>
                  Continue Shopping
                </Button>
                <Button variant="secondary" onClick={onClearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>

            <div className="order-summary-column">
              <div className="summary-card">
                <h3 className="summary-title">Order Summary</h3>

                <div className="summary-row">
                  <span className="summary-label">Subtotal</span>
                  <span className="summary-value">₹{subtotal}</span>
                </div>

                <div className="summary-row">
                  <span className="summary-label">Delivery</span>
                  <span className="summary-value">₹{delivery}</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row total-row">
                  <span className="total-label">Total</span>
                  <span className="total-value">₹{total}</span>
                </div>

                <p className="tax-notice">Taxes and customs included</p>

                <Button variant="primary" onClick={handleCheckout} className="checkout-btn">
                  Checkout <FiArrowRight size={16} />
                </Button>

                <div className="secure-checkout-badge">
                  <FiShoppingBag size={16} />
                  <span>Guaranteed Safe & Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart-state">
            <div className="empty-cart-icon-box">
              <FiShoppingBag size={48} />
            </div>
            <h2>Your Cart is Currently Empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Button variant="primary" onClick={() => navigate('/shop')} className="empty-shop-btn">
              Start Shopping
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
