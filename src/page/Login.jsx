import React, { useState } from 'react'
import { BiUser, BiLockOpen } from 'react-icons/bi';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPass, setShowPass] = useState(false)
  const showPassword =()=>{
    setShowPass(!showPass)
  }
  return (
    <section className="login-section mb-20 pt-20">
      <div className="login-center">
        <form action="#" method='get' className='md:w-[700px] md:pt-40 max-md:m-5 m-auto p-12 space-y-8 effective-date'>
          <div className="form-head text-center">
            <h3 className='policy-heading font-bold'>Hello Again</h3>
            <p className='text-[16px]'>Enter your credentials to acces your account.</p>
          </div>
          <div className="form-mail relative border p-3 pl-12 w-[80%] m-auto">
            <p className='absolute text-[22px] left-4 top-4'><BiUser/></p>
            <input type="email" name="mail" id="mail" placeholder='Enter Your Email' required />
          </div>
          <div className="form-mail relative border p-3 pl-12 w-[80%] m-auto">
            <p className='absolute text-[22px] left-4 top-4'><BiLockOpen/></p>
            <input type={!showPass?'password':'text'} name="mail" placeholder='Password' required />
            <span><p><span onClick={showPassword} className='text-[22px] absolute right-5 top-4'>{!showPass?<AiOutlineEyeInvisible/>:<AiOutlineEye/>} </span></p></span>
          </div>
          <div className="remem-forgot w-[80%] m-auto flex justify-between items-center">
            <span className='flex justify-between items-center'>
              <input className='w-[25px]' type="checkbox" id='tp-check' />
              <label htmlFor="tp-check"><p>Remember Me</p></label>
            </span>
            <span className='hover:text-[#f50963]'><Link to='fotgot'>Forgot Password?</Link></span>
          </div>
          <div className="submit-btn w-[80%] m-auto">
            <button type='submit' className='w-full h-full p-4 policy-heading text-[22px] transition-all ease-in duration-150 bg-[#f50963] text-white hover:bg-black'>Sign In</button>
          </div>
          <p className='text-center'>Don’t have an account? 
            <span className='cursor-pointer text-[#f50963]'><Link to='/register'> Register Now</Link></span>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login
