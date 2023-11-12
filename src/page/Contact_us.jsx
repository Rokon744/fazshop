import React from 'react'
import { contactMe } from '../Data'

const Contact_us = () => {
  return (
    <div className="contact-extra-page pt-[85px]">
      <div className="contact-extra-center ">
        <div className="content-extrea py-[5rem]">
          <h3 className='mt-[3rem] text-center relative w-auto'>
            <span className='text-[2.3rem] text-white pb-[0.7rem]'>Get In Touch</span>
          </h3>
          <form action="#" className='mt-5'>
            <div className="container w-[95%] sm:w-[90%] px-5 py-8 md:w-[75%] m-auto text-white">
              <div className="first-imput justify-between md:flex text-white">
                <input className='md:w-[48%] max-md:w-full p-2' type="text" placeholder='Name *' />
                <input className='md:w-[48%] max-md:w-full max-md:mt-5 p-2' type="email" placeholder='Email *' />
              </div>
              <input className='w-full my-4' type="text" placeholder='Subject *' />
              <textarea className='w-full' name="" id="" cols="20" rows="8" placeholder='Massage *'></textarea>
              <button type='submit' className='px-[3rem] py-[.5rem] bg-[#c49b66] text-white my-4 rounded-[.2rem]'>Send</button>
            </div>
          </form>
          <div className="w-[95%] sm:w-[90%] px-5 py-8 md:w-[75%] m-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {
                contactMe.map((item, index) => {
                  const { name, info } = item
                  return <div key={index} className="single-div">
                    <h4>{name}</h4>
                    <p className='text-[#a3a3a3] text-[0.9rem]'>{info}</p>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact_us
