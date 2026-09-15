import React from 'react'
import './Css/ProductCard.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ProductCard = () => {

    return (
        <div className="bouquet">

            <h2>Best Flower Bouquet</h2>

            <div className="bouquet-container">

                <div className="bouquet-card">

                    <div className="bouguet-img-wrapper">
                        <img
                            src="/images/c3.webp"
                            alt="Alluring Wishes"
                            className="bouquet-img"
                        />
                        <span className="badge">10%</span>
                    </div>

                    <div className="bouguet-info">
                        <p className="bouguet-name">
                            Alluring Wishes
                        </p>
                    </div>

                    <div className="price-row">
                        <div>
                            <span className="new-price">₹2899</span>
                        </div>

                        <button className="cart-btn">
                            <FaShoppingCart />
                        </button>
                    </div>

                    <p className="delivery">
                        Earliest Delivery:
                        <span> Today</span>
                    </p>

                    <div className="rating-row">
                        <span className="rating">
                            4.2   <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStarHalfStroke />
                        </span>

                        <span className="reviews">
                            12368 Reviews
                        </span>
                    </div>

                </div>


                <div className="bouquet-card">

                    <div className="bouguet-img-wrapper">
                        <img
                            src="/images/c4.webp"
                            alt="Drew Drops"
                            className="bouquet-img"
                        />
                        <span className="badge">29%</span>
                    </div>

                    <div className="bouguet-info">
                        <p className="bouguet-name">
                            Drew Drops
                        </p>
                    </div>

                    <div className="price-row">
                        <div>
                            <span className="new-price">₹1499</span>
                            <span className="old-price">₹1999</span>
                        </div>

                        <button className="cart-btn">
                            <FaShoppingCart />
                        </button>
                    </div>

                    <p className="delivery">
                        Earliest Delivery:
                        <span> Today</span>
                    </p>

                    <div className="rating-row">
                        <span className="rating">
                            4.8   <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStarHalfStroke />
                        </span>

                        <span className="reviews">
                            13379 Reviews
                        </span>
                    </div>

                </div>


                <div className="bouquet-card">

                    <div className="bouguet-img-wrapper">
                        <img
                            src="/images/c1.webp"
                            alt="50 Roses Bouquet"
                            className="bouquet-img"
                        />
                        <span className="badge">13%</span>
                    </div>

                    <div className="bouguet-info">
                        <p className="bouguet-name">
                            50 Roses Bouquet
                        </p>
                    </div>

                    <div className="price-row">
                        <div>
                            <span className="new-price">₹3499</span>
                            <span className="old-price">₹3999</span>
                        </div>

                        <button className="cart-btn">
                            <FaShoppingCart />
                        </button>
                    </div>

                    <p className="delivery">
                        Earliest Delivery:
                        <span> Today</span>
                    </p>

                    <div className="rating-row">
                        <span className="rating">
                            4.6   <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStarHalfStroke />
                        </span>

                        <span className="reviews">
                            30343 Reviews
                        </span>
                    </div>

                </div>


                <div className="bouquet-card">

                    <div className="bouguet-img-wrapper">
                        <img
                            src="/images/c5.webp"
                            alt="Flowers In Vase"
                            className="bouquet-img"
                        />
                        <span className="badge">3%</span>
                    </div>

                    <div className="bouguet-info">
                        <p className="bouguet-name">
                            Flowers In Vase
                        </p>
                    </div>

                    <div className="price-row">
                        <div>
                            <span className="new-price">₹1649</span>
                            <span className="old-price">₹1699</span>
                        </div>

                        <button className="cart-btn">
                            <FaShoppingCart />
                        </button>
                    </div>

                    <p className="delivery">
                        Earliest Delivery:
                        <span> Today</span>
                    </p>

                    <div className="rating-row">
                        <span className="rating">
                            5   <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStarHalfStroke />
                        </span>

                        <span className="reviews">
                            11115 Reviews
                        </span>
                    </div>

                </div>


                <div className="bouquet-card">

                    <div className="bouguet-img-wrapper">
                        <img
                            src="/images/c2.webp"
                            alt="Carnation In Vase"
                            className="bouquet-img"
                        />
                        <span className="badge">5%</span>
                    </div>

                    <div className="bouguet-info">
                        <p className="bouguet-name">
                            Carnation In Vase
                        </p>
                    </div>

                    <div className="price-row">
                        <div>
                            <span className="new-price">₹949</span>
                            <span className="old-price">₹999</span>
                        </div>

                        <button className="cart-btn">
                            <FaShoppingCart />
                        </button>

                    </div>

                    <p className="delivery">
                        Earliest Delivery:
                        <span> Today</span>
                    </p>

                    <div className="rating-row">
                        <span className="rating">
                            4.1   <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStarHalfStroke />
                        </span>

                        <span className="reviews">
                            5956 Reviews
                        </span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductCard