import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import HomeBanner from '../Components/HomeBanner';
import HomeCoupon from '../Components/HomeCoupon';
import HomeProducts from '../Components/HomeProducts';
import HomeSlide from '../Components/HomeSlide';
import hero from '../img/hero.webp'
import Subscribe from '../Components/Subscribe'


const Home = () => {
  return (
    <section className="home-section">
      <section className='home-component'>
        <div className="section-hero w-full m-auto h-auto flex items-center md:p-24 md:pb-0">
          <div className="hero-content w-full h-full lg:flex justify-between items-center p-5 !pb-0 !mt-20 md:mt-0">
            <div className="hero-header md:pb-20">
              <p className='relative p-3 text-[16px] letter-spacing'>Best Ear <br /> Headphones</p>
              <h1 className='lg:text-[80px] md:text-[50px] pb-8'><span>Music To</span> <br /> <span>Fill Your Heart</span></h1>
              <button className='flex items-center border border-gray-900 px-10 py-2 mt-3 hover:bg-black transition duration-300 ease-in hover:text-gray-50'><span className='mr-1'>Show Now</span><FiArrowRight className='text-[17px]' /></button>
            </div>
            <div className="slider__thumb-13 flex md:items-end justify-end lg:h-full lg:mr-20 relative">
              <span className='pulse-animate-area max-md:hidden'></span>
              <span style={{animationDelay:'1s'}} className='pulse-animate-area  max-md:hidden'></span>
              <span style={{animationDelay:'2s'}} className='pulse-animate-area  max-md:hidden'></span>
              <img className='lg:w-full max-md:w-[50%] z-10 max-sm:mr-10' src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="home-slide">
        <HomeSlide />
      </div>
      <div className="home-products">
        <HomeProducts />
      </div>
      <HomeCoupon />
      <HomeBanner />
      <Subscribe/>
    </section>
  )
}

export default Home
