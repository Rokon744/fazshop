import React, { useState } from 'react'
import { BiUser, BiLockOpen } from 'react-icons/bi';
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPass, setShowPass] = useState(false)
  const [showConPass, setShowConPass] = useState(false)
  const showPassword =()=>{
    setShowPass(!showPass)
  }
  return (
    <section className="login-section mb-20 pt-20">
      <div className="login-center">
        <form action="#" method='get' className='md:w-[700px] md:pt-40 max-md:m-5 m-auto p-12 space-y-8 effective-date'>
          <div className="form-head text-center">
            <h3 className='policy-heading font-bold'>Register Now!</h3>
            <p className='text-[16px]'>You can signup with you social account below.</p>
          </div>
          <div className="form-mail relative border p-3 pl-12 w-[80%] m-auto">
            <p className='absolute text-[22px] left-4 top-4'><BiUser /></p>
            <input type="text" name="mail" placeholder='Enter Your Name' required />
          </div>
          <div className="form-mail relative border p-3 pl-12 w-[80%] m-auto">
            <p className='absolute text-[22px] left-4 top-4'><AiOutlineMail /></p>
            <input type="email" placeholder='Enter Your Email' required />
          </div>
          <div className="form-mail relative border p-3 pl-12 w-[80%] m-auto">
            <p className='absolute text-[22px] left-4 top-4'><BiLockOpen /></p>
            <input type={!showPass ? 'password' : 'text'} name="mail" placeholder='Password' required />
            <span><p><span onClick={showPassword} className='text-[22px] absolute right-5 top-4'>{!showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />} </span></p></span>
          </div>
          <div className="form-mail relative border p-3 pl-12 w-[80%] m-auto">
            <p className='absolute text-[22px] left-4 top-4'><BiLockOpen /></p>
            <input type={!showConPass ? 'password' : 'text'} name="mail" placeholder='Confirm Password' required />
            <span><p><span onClick={()=>setShowConPass(!showConPass)} className='text-[22px] absolute right-5 top-4'>{!showConPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />} </span></p></span>
          </div>
          <div className="submit-btn w-[80%] m-auto">
            <button type='submit' className='w-full h-full p-4 policy-heading text-[22px] transition-all ease-in duration-150 bg-[#f50963] text-white hover:bg-black'>Sign In</button>
          </div>
          <p className='text-center'>Already have an account?
            <span className='cursor-pointer text-[#f50963]'><Link to='/login'> Login Now</Link></span>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Register
