import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <section className="login-section mb-36 pt-20">
      <div className="login-center">
        <form action="#" method='get' className='md:w-[700px] md:pt-40 max-md:m-5 m-auto p-12 space-y-8 effective-date'>
          <div className="form-head text-center">
            <h3 className='policy-heading font-bold'>Forgot Password?</h3>
            <p className='text-[16px]'>Enter your email address to request password reset.</p>
          </div>
          <div className="form-mail relative border p-3 pl-12 w-[80%] m-auto">
            <p className='absolute text-[22px] left-4 top-4'><AiOutlineMail /></p>
            <input type="email" placeholder='Enter Your Email' required />
          </div>
          <div className="submit-btn w-[80%] m-auto">
            <button type='submit' className='w-full h-full p-4 policy-heading text-[22px] transition-all ease-in duration-150 bg-[#f50963] text-white hover:bg-black'>Send Request</button>
          </div>
          <p className='text-center'>Remember your password?
            <span className='cursor-pointer text-[#f50963]'><Link to='/login'> Login</Link></span>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Forgot
