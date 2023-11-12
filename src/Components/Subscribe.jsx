import React from 'react'

const Subscribe = () => {
  return (
    <section className='subscribe-form w-auto max:md:h-[300px] h-auto flex flex-row items-center overflow-hidden'>
      <div className="section-center sm:mx-28 mx-5 my-14 bg-white w-[90%]">
        <div className="subs lg:flex justify-between items-center m-12">
          <div className="sub-text">
            <h2 className='md:w-[60%]'>Subscribe For latest Trends & Offers</h2>
          </div>
          <form action="#" method='get' className='md:border-[#b6b4b4] md:border m-auto lg:w-[50%] w-full md:flex justify-between p-1'>
            <input type="email" className='p-5 w-full' placeholder='Enter your email' required />
            <button type='submit' className='py-2 px-10 bg-black text-white'>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
