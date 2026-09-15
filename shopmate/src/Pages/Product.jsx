import React from "react";

import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

import "./Product.css";

const ProductCard = () => {

    const products = [
        {
            id: 1,
            name: "Elegant Handbag",
            price: 1999,
            image: "/bag.jpg",
        },
        {
            id: 2,
            name: "White Sneakers",
            price: 2299,
            image: "/sneakes.jpg",
        },
        {
            id: 3,
            name: "Smart Watch",
            price: 4999,
            image: "/SmartWatch.jpg",
        },
        {
            id: 4,
            name: "Women's Dress",
            price: 1499,
            image: "/dress.jpg",
        },
        {
            id: 5,
            name: "UV Sunglasses",
            price: 799,
            image: "/UV.jpg",
        },
        {
            id: 6,
            name: "Men's Casual Shirt",
            price: 1199,
            image: "/shirt.jpg",
        },
        {
            id: 7,
            name: "Wireless Headphones",
            price: 2399,
            image: "/wireLessHeadphone.jpg",
        },
        {
            id: 8,
            name: "Indoor Plant",
            price: 499,
            image: "/flower.jpg",
        },
    ];

    return (
        <div className="products-grid">

            {products.map((product) => (

                <div
                    className="product-card"
                    key={product.id}
                >

                    <div className="product-image-box">

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                        <button className="wishlist-btn">
                            <CiHeart />
                        </button>

                    </div>

                    <div className="product-details">

                        <h3>
                            {product.name}
                        </h3>

                        <p className="price">
                            ₹{product.price.toLocaleString("en-IN")}
                        </p>

                        <button className="cart-btn">

                            <FaCartShopping />

                            <span>
                                Add to Cart
                            </span>

                        </button>

                    </div>

                </div>

            ))}

        </div>
    );
};

export default ProductCard;