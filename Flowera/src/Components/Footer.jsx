import React from 'react'

import './Css/Footer.css'

import {
    FaGift,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaEnvelope,
    FaPhone
} from 'react-icons/fa'

const Footer = () => {

    return (

        <footer className="footer">

            <div className="footer-features">

                <div className="footer-feature footer-line1">

                    <div className="featur-icon">
                        <img
                            src="/images/secure-payment-png.png"
                            alt="Secure Payment"
                            className="feature-img"
                        />
                    </div>

                    <div>
                        <h3>Secure Payment</h3>

                        <p>
                            With support for cards, net banking, UPI, wallets & more, we
                            offer seamless digital payment experience
                        </p>
                    </div>

                </div>


                <div className="footer-feature footer-line1">

                    <div className="featur-icon ">
                        <img
                            src="/images/trusted-brand-png.png"
                            alt="Trusted Brand"
                            className="feature-img"
                        />
                    </div>

                    <div>
                        <h3>Most Trusted Brand</h3>

                        <p>
                            Our solutions are purely consumer centric, we listen to you
                            and work for your safety, comfort and style.
                        </p>
                    </div>

                </div>


                <div className="footer-feature">

                    <div className="featur-icon">
                        <img
                            src="/images/gift-png.png"
                            alt="Gift"
                            className="feature-img"
                        />
                    </div>

                    <div>
                        <h3>Customised Gifting Options</h3>

                        <p>
                            Our design experts make sure you find uniqueness and
                            exclusivity in all our offerings
                        </p>
                    </div>

                </div>

            </div>


            <div className="footer-line"></div>


            <div className="footer-main">

                <div className="footer-about">

                    <div className="footer-logo">

                        <div className="logo-icon">
                          <img src="/images/footerlogo.webp" alt="" />
                        </div>

                    </div>

                    <p>
                        Flowera is a one-stop solution for Flowers, cakes & gift
                        delivery to More than 500plus locations in India.
                    </p>

                </div>


                <div className="footer-links">

                    <h3>Information</h3>

                    <a href="#">All City</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Privacy & Policy</a>
                    <a href="#">Refund & Cancellation</a>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">About us</a>
                    <a href="#">Offers</a>
                    <a href="#">Become a Vendor</a>
                    <a href="#">Corporate Tie-ups</a>

                </div>


                <div className="footer-social">

                    <h3>Follow Us</h3>

                    <div className="social-icons">

                        <a href="#">
                            <FaFacebookF />
                        </a>

                        <a href="#">
                            <FaInstagram />
                        </a>

                        <a href="#">
                            <FaLinkedinIn />
                        </a>

                        <a href="#">
                            <FaTwitter />
                        </a>

                    </div>

                   

                   <div className="payment">
                    <img src="/images/payment-strip.png" alt="" />
                   </div>

                </div>


                <div className="footer-contact">

                    <h3>Contact Us</h3>

                    <p>
                        <FaEnvelope />
                        care@flowera.in
                    </p>

                    <p>
                        <FaPhone />
                        +91 8115930084
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer