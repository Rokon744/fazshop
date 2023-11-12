import React, { useEffect, useState } from 'react'
import faq_img from '../img/faq-img-2.webp'
import { Link } from 'react-router-dom'
import { FaHome, FaRegComments } from 'react-icons/fa';
import { BsUiRadiosGrid } from 'react-icons/bs';
import { faqAccordion, faqsCommunity, faqsSupport } from '../Data';
import FaqsAccordion from '../Components/FaqsAccordion';


const Faqs = () => {
  const [state, setState] = useState('GENERAL')
  const generalQs =(e)=>{
    setState('GENERAL')
    const btn = document.querySelectorAll('.add-rem-btn')
    btn[0].classList.add('active')
    btn[1].classList.remove('active')
    btn[2].classList.remove('active')
  }
  const communityFaq = (e)=>{
    setState('COMMUNITY')
    const btn = document.querySelectorAll('.add-rem-btn')
    btn[0].classList.remove('active')
    btn[1].classList.add('active')
    btn[2].classList.remove('active')
  }
  const supportFaq = (e)=>{
    setState('SUPPORT')
    const btn = document.querySelectorAll('.add-rem-btn')
    btn[0].classList.remove('active')
    btn[1].classList.remove('active')
    btn[2].classList.add('active')
  }
  return (
    <section className="faq-sec pt-40">
      <div className="faq-center sm:w-[85%] m-auto max-sm:m-5 mb-20">
        <div className="faqs-header policy-heading text-center">
          <h2 className='font-bold md:text-[50px]'>Frequently Asked <br className='md:hidden'></br> Questions</h2>
          <p><span className='text-black'><Link to='/'>Home</Link></span> . Frequently Asked Questions</p>
          <img className='w-full my-14' src={faq_img} alt="" />
        </div>

        <div className="accordion-area pb-20">
          <div className="accordion-center">
            <div className="faq-nav md:w-[90%] lg:w-[50%] grid md:grid-cols-3 max-md:grid-cols-2">
              <h4><button onClick={generalQs} className='flex add-rem-btn items-center text-[15px] active py-4'><span><FaHome /></span> General Questions</button></h4>
              <h4><button onClick={communityFaq} className='flex add-rem-btn text-[15px] py-4'><span><BsUiRadiosGrid /></span> Community</button></h4>
              <h4><button onClick={supportFaq} className='flex add-rem-btn text-[15px] py-4'><span><FaRegComments /></span> Support</button></h4>
            </div>
            <div className='space-y-28'>
              {
                state === 'GENERAL' ? 
                faqAccordion.map((item, ind) => {
                  return <FaqsAccordion key={ind} {...item} />
                })
              :''
              }
              {
                state === 'COMMUNITY' ? 
                faqsCommunity.map((item, ind)=>{
                  return <FaqsAccordion key={ind} {...item}/>
                })
                :''
              }
              {
                state === 'SUPPORT' ? 
                faqsSupport.map((item, ind)=>{
                  return <FaqsAccordion key={ind} {...item}/>
                })
                :''
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
