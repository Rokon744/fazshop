import React from 'react'
import { Link } from 'react-router-dom'
import eror from '../img/error-page.jpg'

const Error = () => {
  return (
    <section className="section-error text-center md:p-40 max-md:p-10 max-md:pt-20">
      <div className="error-center text-center h-[50vh]">
        <h1 className='text-[#dcd8d8] text-[110px] text-center'>404</h1>
        <img className='m-auto' src={eror} alt="" />
      </div>
      <h2 className='policy-heading font-bold'>Oops! Page not found</h2>
      <p>Whoops, this is embarassing. Looks like the page you were <br /> looking for was not found.</p>
      <button className='py-2 mt-10 px-6 policy-heading text-white bg-[#f50963] hover:bg-black'><Link to='/'>Back To Home</Link></button>
    </section>
  )
}

export default Error
