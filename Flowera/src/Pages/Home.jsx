import React from 'react'
import './Css/Home.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Category from '../Components/Category'



import Carousel from 'react-bootstrap/Carousel';
import ProductCard from './ProductCard'
import CardFour from './CardFour'
import Combo from './Combo'
import Cake from './Cake'
import ClientReviews from './ClientReviews'

const Home = () => {

  let category = [
    { _id: 1, text: "CAKES", imageUrl: "/images/c1.webp" },
    { _id: 2, text: "FLOWERS", imageUrl: "/images/c2.webp" },
    { _id: 3, text: "COMBOS", imageUrl: "/images/c3.webp" },
    { _id: 4, text: "PLANTS", imageUrl: "/images/c4.webp" },
    { _id: 5, text: "BIRTHDAY", imageUrl: "/images/c5.webp" },
    { _id: 6, text: "ANNIVERSARY", imageUrl: "/images/c6.webp" },
  ]
  return (
    <>

      <Header />

      {/* Slider start */}

      <div className="slider-outer">
        <Carousel fade>
          <Carousel.Item>
            <img src="/images/s1.webp" alt="slider 1" className='slider-image' />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/s2.webp" alt="slider 2" className='slider-image' />

          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/s3.webp" alt="slider 3" className='slider-image' />

          </Carousel.Item>
        </Carousel>
      </div>


      {/* Slider End */}
      {/* Category card start */}
      <div className="category-card-home-outer">
        {

          category.slice(0, 6).map((item) => (
            <Category key={item._id} text={item.text} imageUrl={item.imageUrl} />
          ))
        }

      </div>

      <div className="middle-image-outer">
        <div className="first-image">
          <img src="./images/u-p-1.webp" alt="Upper-first-image" />
        </div>
        <div className="second-image">
          <img src="./images/u-p-2.webp" alt="Upper-first-image" />

        </div>
      </div>
      <div className="why-choose">
        <img src="./images/m-p-1.webp" alt="Upper-first-image" />
      </div>

      <ProductCard />
      <CardFour />
      <Combo/>
      <Cake/>
      <ClientReviews/>
      <Footer />



    </>
  )
}

export default Home