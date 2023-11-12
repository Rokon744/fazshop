import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { homeShipPayment } from '../Data';
import { MdOutlinePayment } from 'react-icons/md';

const HomeBanner = () => {
  return (
    <div className='home-banner md:mx-24 my-5'>
      <div className="home-banner-center w-[100%] h-full">
        <div className="home-banner-details px-20 py-24">
          <p>Apple iPhone 12 Pro</p>
          <h3 className='font-semibold text-[44px] hover:text-[#f50963] transition-all ease-in duration-300 leading-[1.09]'><a href="shop">The wait is on: <br /> iphone 12 max pro</a></h3>
          <p>Last call for up to <span className='font-semibold text-[25px] text-black'>32%</span> off!</p>
          <button className='px-6 py-3 bg-stone-50 mt-7 hover:text-white hover:bg-[#f50963] transition-all ease-in duration-300 border'><a href="shop" className='flex items-center space-x-1'><span>Buy Now</span> <span><FaArrowRight /></span></a></button>
        </div>
      </div>
      <div className="home-ship-payment md:py-10 max-md:p-5">
        <div className="ship-payment-center grid lg:grid-cols-4 min-[600px]:grid-cols-2 max-lg:space-y-5">
          {/* single card */}
          {
            homeShipPayment.map((item, ind) => {
              const { heading, details, br, Icon } = item
              return <div key={ind} className="ship-pay-cart flex items-center">
                <div className="ship-icon w-[60px] h-[60px] rounded-full border flex justify-center items-center mr-5">
                  <span className='text-[25px]'><Icon/></span>
                </div>
                <div className="ship-details">
                  <h4 className='text-[18px] font-semibold'>{heading}</h4>
                  <p>{details}</p>
                  <p>{br}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
