import React from 'react'
import './Css/ClientReviews.css'
import { FaQuoteLeft, FaQuoteRight, FaUserCircle } from 'react-icons/fa'

const ClientReviews = () => {
    return (
        <div className="client-reviews">

            <h2>What Our Client Says</h2>

            <div className="review-container">

                <div className="review-card">
                    <FaQuoteLeft className="quote-left" />
                    <div className="client">
                        <img src="/images/user.webp" alt="Cake"  className='user'/>
                        <h3>Mohit</h3>
                    </div>

                    <h4>You Guys Doing Great Job God Bless You</h4>

                    <p>
                        Got the amazing combo in my budget along with
                        premium service. Thank you for the delivery in India at
                        last moment.
                    </p>

                </div>


                <div className="review-card">

                    <FaQuoteLeft className="quote-left" />

                    <div className="client">
                        <img src="/images/user.webp" alt="Cake"  className='user'/>
                        <h3>Nehal</h3>
                    </div>

                    <h4>Express Delivery In India</h4>

                    <p>
                        This is second time I am ordering flowers from
                        Flowera for India, again got the fresh flowers,
                        however flowers are really awesome. The quality of
                        vase is also good.. I will 5 star to flowers.
                    </p>

                </div>


                <div className="review-card">

                    <FaQuoteLeft className="quote-left" />

                    <div className="client">
                        <img src="/images/user.webp" alt=" Cake"  className='user'/>
                        <h3>Vedant Mishra</h3>
                    </div>

                    <h4>Amazing Service</h4>

                    <p>
                        I order the cake for the first time in (City) and I am
                        very happy with taste and everything is fine.
                    </p>

                </div>

            </div>

        </div>
    )
}

export default ClientReviews