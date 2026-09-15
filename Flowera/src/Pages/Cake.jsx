import React from 'react'
import './Css/Cake.css'
import { FaShoppingCart } from "react-icons/fa";


const Cake = () => {
    return (
        <>
        <div className="cake">

            <h2>Best Selling Cakes</h2>

            <div className="cake-container">

                <div className="cake-card">
                    <div className="cake-img-wrapper">
                        <img src="/images/cake1.webp" alt="Special Hammer Cake" />
                        <span className="cake-badge">22%</span>
                    </div>

                    <div className="cake-info">
                        <p>Special Hammer Cake</p>
                    </div>

                    <div className="cake-price-row">
                        <div>
                            <span className="cake-new-price">₹1599</span>
                            <span className="cake-old-price">₹1999</span>
                        </div>
                        <button className="cake-cart-btn"><FaShoppingCart /></button>
                    </div>

                    <p className="cake-delivery">
                        Earliest Delivery: <span>Today</span>
                    </p>
                       <div className="cake-weight">
                        <button>1 Kg</button>
                        <button>2 Kg</button>
                    </div>

                    <div className="cake-rating-row">
                        <span className="cake-rating">4 ★★★★★</span>
                        <span className="cake-reviews">8986 Reviews</span>
                    </div>
                </div>


                <div className="cake-card">
                    <div className="cake-img-wrapper">
                        <img src="/images/cake2.webp" alt="Roses With Vanilla Cake" />
                        <span className="cake-badge">24%</span>
                    </div>

                    <div className="cake-info">
                        <p>Roses With Vanilla Cake</p>
                    </div>

                    <div className="cake-price-row">
                        <div>
                            <span className="cake-new-price">₹1499</span>
                            <span className="cake-old-price">₹1899</span>
                        </div>
                        <button className="cake-cart-btn"><FaShoppingCart /></button>
                    </div>

                    <p className="cake-delivery">
                        Earliest Delivery: <span>Today</span>
                    </p>

                    <div className="cake-weight">
                        <button>1 Kg</button>
                        <button>2 Kg</button>
                    </div>

                    <div className="cake-rating-row">
                        <span className="cake-rating">4.2 ★★★★★</span>
                        <span className="cake-reviews">6363 Reviews</span>
                    </div>
                </div>


                <div className="cake-card">
                    <div className="cake-img-wrapper">
                        <img src="/images/cake3.webp" alt="Delicious White Forest Cake" />
                        <span className="cake-badge">29%</span>
                    </div>

                    <div className="cake-info">
                        <p>Delicious White Forest Cake</p>
                    </div>

                    <div className="cake-price-row">
                        <div>
                            <span className="cake-new-price">₹599</span>
                            <span className="cake-old-price">₹799</span>
                        </div>
                        <button className="cake-cart-btn"><FaShoppingCart /></button>
                    </div>

                    <p className="cake-delivery">
                        Earliest Delivery: <span>Today</span>
                    </p>

                    <div className="cake-weight">
                        <button>0.5 Kg</button>
                        <button>1 Kg</button>
                        <button>2 Kg</button>
                    </div>

                    <div className="cake-rating-row">
                        <span className="cake-rating">4.4 ★★★★★</span>
                        <span className="cake-reviews">13951 Reviews</span>
                    </div>
                </div>


                <div className="cake-card">
                    <div className="cake-img-wrapper">
                        <img src="/images/cake4.webp" alt="Belgium Chocolate Cake" />
                        <span className="cake-badge">18%</span>
                    </div>

                    <div className="cake-info">
                        <p>Belgium Chocolate Cake</p>
                    </div>

                    <div className="cake-price-row">
                        <div>
                            <span className="cake-new-price">₹749</span>
                            <span className="cake-old-price">₹899</span>
                        </div>
                        <button className="cake-cart-btn"><FaShoppingCart /></button>
                    </div>

                    <p className="cake-delivery">
                        Earliest Delivery: <span>Today</span>
                    </p>

                    <div className="cake-weight">
                        <button>0.5 Kg</button>
                        <button>1 Kg</button>
                        <button>2 Kg</button>
                    </div>

                    <div className="cake-rating-row">
                        <span className="cake-rating">4.1 ★★★★★</span>
                        <span className="cake-reviews">15041 Reviews</span>
                    </div>
                </div>


                <div className="cake-card">
                    <div className="cake-img-wrapper">
                        <img src="/images/cake5.webp" alt="Fruit Cake" />
                        <span className="cake-badge">26%</span>
                    </div>

                    <div className="cake-info">
                        <p>Fruit Cake</p>
                    </div>

                    <div className="cake-price-row">
                        <div>
                            <span className="cake-new-price">₹999</span>
                            <span className="cake-old-price">₹1299</span>
                        </div>
                        <button className="cake-cart-btn"><FaShoppingCart /></button>
                    </div>

                    <p className="cake-delivery">
                        Earliest Delivery: <span>Today</span>
                    </p>

                    <div className="cake-weight">
                        <button>0.5 Kg</button>
                        <button>1 Kg</button>
                    </div>

                    <div className="cake-rating-row">
                        <span className="cake-rating">5 ★★★★★</span>
                        <span className="cake-reviews">5368 Reviews</span>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Cake