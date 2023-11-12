import React from 'react'
import { contactCartInfo, officeLocations, socialIcon } from '../Data'
import contact3 from '../img/contact-icon-2.webp'

const Contact = () => {
  return (
    <section className="section-contact conatct-center mb-10 pt-20">
      <div className="md:px-28 px-5 head-background">
        <div className="">
          <div className="contact-header text-center m-auto space-y-5 py-20">
            <ul>
              <li>GET TO KNOW US</li>
            </ul>
            <h1 className='font-extrabold max-lg:text-[45px] max-sm:text-[30px]'>Have a project in mind? <br className='max-lg:hidden'></br> Let’s talk.</h1>
          </div>
          <div className="contact-cart grid md:grid-cols-2 lg:grid-cols-3 max-md:space-y-10 text-center md:space-x-5">
            {
              contactCartInfo.map((item, ind) => {
                const { iamge, type, locate, info, link } = item
                return <div key={ind} className="cart-center bg-white p-14">
                  <div className="cart-img flex justify-center mb-5">
                    <img src={iamge} alt="" />
                  </div>
                  <div className="cart-detail">
                    <span className='text-[18px] text-[#999]'>{type}</span>
                    <h4 className='mt-5 hover:text-[#f50963]'><a href={link}>{locate}</a></h4>
                    <h4 className='hover:text-[#f50963]'><a href={link}>+{info}</a></h4>
                  </div>
                </div>
              })
            }
            <div className="cart-center bg-white p-14 md:mt-5 lg:mt-0">
              <div className="cart-img flex justify-center mb-5">
                <img src={contact3} alt="" />
              </div>
              <div className="cart-detail">
                <span className='text-[18px] text-[#999] my-5'>Social Media</span>
                <h4 className='mt-5'>Follow on social media</h4>
                <ul className='flex justify-center items-center'>
                  {
                    socialIcon.map((Icon, ind) => {
                      return <li key={ind} className='text-[#999] p-3 cursor-pointer hover:text-[#f50963]'><Icon /></li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form md:px-28 px-5 md:mt-20 mt-10">
        <div className="form-center">
          <form action="#" method='get' className='border lg:p-20 sm:p-10 max-sm:p-5'>
            <h3 className='mb-10'>Send a message</h3>
            <div className="form-inp grid md:grid-cols-2 md:space-x-5 max-md:space-y-5 mb-5">
              <input className='p-5 bg-[#f5f5f8] w-full' type="text" placeholder='Enter Your Name' />
              <input className='p-5 bg-[#f5f5f8] w-full' type="email" placeholder='Enter Your Email' />
            </div>
            <div className="form-inp grid md:grid-cols-2 md:space-x-5 max-md:space-y-5 mb-5">
              <input className='p-5 bg-[#f5f5f8] w-full' type="number" placeholder='Mobile' />
              <input className='p-5 bg-[#f5f5f8] w-full' type="text" placeholder='Company' />
            </div>
            <textarea className='w-full bg-[#f5f5f8] p-5' name="" id="" cols="30" rows="5" placeholder='Your massage'></textarea>
            <div className="robot-check flex items-center">
              <input className='w-[20px] mr-3' type="checkbox" name="" id="robot-ck" />
              <label htmlFor="robot-ck"><p>I am bound by the terms of the Service I accept Privacy Policy.</p></label>
            </div>
            <button className='py-3 px-8 mt-7 text-white bg-[#f80b66]'>Send Message</button>
          </form>
        </div>
      </div>
      <div className="visit-office mt-10">
        <div className="location-head space-y-3 md:w-[70%] max-md:p-5 m-auto">
          <p>LOCATIONS</p>
          <h2 className='font-bold'>Come and visit our offices <br /> around the world</h2>
        </div>
        {
          officeLocations.map((item, ind) => {
            const { office, image, locate_link, website, number } = item
            return <div key={ind} className="visit-locations md:w-[70%] max-md:p-5 m-auto lg:flex justify-between items-center py-10">
              <div className="office-name">
                <h4 className='font-semibold max-[800px]:text-[1.3rem]'>{office}</h4>
              </div>
              <div className="office-details sm:flex justify-between items-center lg:w-[70%] max-sm:space-y-5">
                <div className="img-link sm:flex max-sm:space-y-5">
                  <img className='w-[52px] h-[56px]' src={image} alt="" />
                  <p className='flex flex-col sm:ml-10'>
                    <span className='hover:text-[#f80b66]'>{website}</span>
                    <span className='hover:text-[#f80b66]'>{number}</span>
                  </p>
                </div>
                <button className='py-3 px-8 hover:bg-[#f80b66] hover:text-white border transition-all ease-in duration-150'><a href={locate_link}>View Location</a></button>
              </div>
            </div>
          })
        }
      </div>
    </section>
  )
}

export default Contact
