import React from 'react'
import './Css/Combo.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";


const Combo = () => {
    return (
        <>
            <div className="combo">

                <h2>Best Selling Combos</h2>

                <div className="combo-container">

                    <div className="combo-card">
                        <div className="combo-img-wrapper">
                            <img src="/images/comb1.webp" alt="Birthday Flowers And Cake" />
                            <span className="combo-badge">4%</span>
                        </div>

                        <div className="combo-info">
                            <p>Birthday Flowers And Cake</p>
                        </div>

                        <div className="combo-price-row">
                            <div>
                                <span className="combo-new-price">₹1199</span>
                                <span className="combo-old-price">₹1249</span>
                            </div>

                            <button className="combo-cart-btn">
                                <FaShoppingCart />

                            </button>
                        </div>

                        <p className="combo-delivery">
                            Earliest Delivery: <span>Today</span>
                        </p>

                        <div className="combo-rating-row">
                            <span className="combo-rating">4.6
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalfStroke />


                            </span>
                            <span className="combo-reviews">7173 Reviews</span>
                        </div>
                    </div>


                    <div className="combo-card">
                        <div className="combo-img-wrapper">
                            <img src="/images/comb2.webp" alt="For The Soul" />
                        </div>

                        <div className="combo-info">
                            <p>For The Soul</p>
                        </div>

                        <div className="combo-price-row">
                            <div>
                                <span className="combo-new-price">₹1599</span>
                            </div>

                            <button className="combo-cart-btn">
                                <FaShoppingCart />

                            </button>
                        </div>

                        <p className="combo-delivery">
                            Earliest Delivery: <span>Today</span>
                        </p>

                        <div className="combo-rating-row">
                            <span className="combo-rating">4.6

                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalfStroke />
                            </span>
                            <span className="combo-reviews">7488 Reviews</span>
                        </div>
                    </div>


                    <div className="combo-card">
                        <div className="combo-img-wrapper">
                            <img src="/images/comb3.webp" alt="Black Forest Cake With Pink Roses" />
                            <span className="combo-badge">26%</span>
                        </div>

                        <div className="combo-info">
                            <p>Black Forest Cake With Pink Roses</p>
                        </div>

                        <div className="combo-price-row">
                            <div>
                                <span className="combo-new-price">₹1999</span>
                                <span className="combo-old-price">₹2589</span>
                            </div>

                            <button className="combo-cart-btn">
                                <FaShoppingCart />

                            </button>
                        </div>

                        <p className="combo-delivery">
                            Earliest Delivery: <span>Today</span>
                        </p>

                        <div className="combo-rating-row">
                            <span className="combo-rating">4.4
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalfStroke />
                            </span>
                            <span className="combo-reviews">8010 Reviews</span>
                        </div>
                    </div>


                    <div className="combo-card">
                        <div className="combo-img-wrapper">
                            <img src="/images/comb4.webp" alt="Treasure Of Heart" />
                            <span className="combo-badge">29%</span>
                        </div>

                        <div className="combo-info">
                            <p>Treasure Of Heart</p>
                        </div>

                        <div className="combo-price-row">
                            <div>
                                <span className="combo-new-price">₹1499</span>
                                <span className="combo-old-price">₹1999</span>
                            </div>

                            <button className="combo-cart-btn">
                                <FaShoppingCart />

                            </button>
                        </div>

                        <p className="combo-delivery">
                            Earliest Delivery: <span>Today</span>
                        </p>

                        <div className="combo-rating-row">
                            <span className="combo-rating">4.3
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalfStroke />
                            </span>
                            <span className="combo-reviews">5030 Reviews</span>
                        </div>
                    </div>


                    <div className="combo-card">
                        <div className="combo-img-wrapper">
                            <img src="/images/comb5.webp" alt="Plants With Chocolates" />
                        </div>

                        <div className="combo-info">
                            <p>Plants With Chocolates</p>
                        </div>

                        <div className="combo-price-row">
                            <div>
                                <span className="combo-new-price">₹1199</span>
                            </div>

                            <button className="combo-cart-btn">

                            </button>
                        </div>

                        <p className="combo-delivery">
                            Earliest Delivery: <span>Today</span>
                        </p>

                        <div className="combo-rating-row">
                            <span className="combo-rating">4.6
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalfStroke /></span>
                            <span className="combo-reviews">5368 Reviews</span>
                        </div>
                    </div>

                </div>

            </div>

            <div className="features">

                <div className="feature-item">
                    <div className="feature-icon">
                        <img src="/images/f1.webp" alt="feature" className='feature' />
                    </div>

                    <div className="feature-content">
                        <h3>Safety And Hygiene</h3>
                        <p>
                            Our Bakery & Florist shop takes complete
                            control over safety and hygiene. We also
                            follow proper covid safety guidelines.
                        </p>
                    </div>
                </div>


                <div className="feature-item">
                    <div className="feature-icon">
                        <img src="/images/f1.webp" alt="feature" className='feature' />

                    </div>

                    <div className="feature-content">
                        <h3>Express 3 Hour Delivery</h3>
                        <p>
                            Get Flowers,cakes, gifts,chocolate same-
                            day delivery in 3 hours. We guarantee
                            ontime delivery.
                        </p>
                    </div>
                </div>


                <div className="feature-item">
                    <div className="feature-icon">
                        <img src="/images/f1.webp" alt="feature" className='feature' />

                    </div>

                    <div className="feature-content">
                        <h3>Delivery In 500+ Cities</h3>
                        <p>
                            We bet, you will have the best experience of
                            flowers & cakes in more the 600 cities in
                            India.
                        </p>
                    </div>
                </div>


                <div className="feature-item">
                    <div className="feature-icon">
                        <img src="/images/f1.webp" alt="feature" className='feature' />

                    </div>

                    <div className="feature-content">
                        <h3>Midnight Delivery</h3>
                        <p>
                            Surprise your loved one with our reliable
                            midnight flower delivery services.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Combo