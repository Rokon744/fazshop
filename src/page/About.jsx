import React from 'react'
import { BsArrowUpRight, BsPlayFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import AboutSlider1 from '../Components/AboutSlider1';
import { aboutListProductText, awardsDetails } from '../Data';
import about_video from '../img/faq-img.fe5fd98a.jpg'
import AboutMemSlider from '../Components/AboutMemSlider';
import AboutAutoplay from '../Components/AboutAutoplay';
import Subscribe from '../Components/Subscribe';

const About = () => {
  return (
    <>
      <div style={{ paddingTop: '5.5rem' }}></div>
      <section className="about-section">
        <div className="about-center">
          <div className="about-hero mb-20">
            <div className="about-rgb-back h-full flex items-center">
              <div className="hero-header policy-heading text-white text-center m-auto">
                <h5 className='font-semibold text-[18px]'>About Us</h5>
                <h1 className='font-bold'>Welcome to our <br></br> Faz Shop</h1>
              </div>
            </div>
          </div>
          <div className="started-about lg:flex justify-between sm:w-[85%] m-auto max-sm:p-5 my-20">
            <div className="start-head">
              <h4 className='policy-heading text-[30px] font-semibold'>It started with a <br />
                bang now we are here.</h4>
            </div>
            <div className="start-detail space-y-4 lg:w-[65%] text-[16px] leading-[1.62]">
              <p>Ut at maximus magna. Vestibulum interdum sapien in facilisis imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ac placerat risus. Nullam eget tortor felis. Nulla facilisi.Vestibulum mattis diam non luctus elementum. Cras sollicitudin, nisi in semper viverra, felis diam consequat mi, quis tincidunt ligula</p>
              <p>Nam nibh diam, varius quis lectus eget, laoreet cursus metus. morbi augue lectus, dapibus eget justo nec, consectetur auctor nis luctus neque.!</p>
            </div>
          </div>
          <div className="about-list-product sm:w-[85%] m-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-10 ">
            {
              aboutListProductText.map((item, ind) => {
                const { image, header, detail } = item
                return <div key={ind} className="list-product border p-10 m-3">
                  <div className="about-top flex justify-between">
                    <img className='w-[60px]' src={image} alt="about-list-one" />
                    <span className='text-[22px]'><BsArrowUpRight /></span>
                  </div>
                  <div className="about-list-text mt-7">
                    <span><p>{detail}</p></span>
                    <h3 className='syne-heading text-[26px]'>
                      <a href="#" className='relative'>{header}<span className='hover-border-bottom'></span></a>
                    </h3>
                  </div>
                </div>
              })
            }
          </div>
          <div className="about-slider-one">
            <AboutSlider1 />
          </div>
          <div className="about-awards syne-heading max-sm:p-5 sm:w-[85%] m-auto my-20">
            <div className="award-header text-center mb-20">
              <h1 className=' lg:text-[80px]'>Our Awards.</h1>
            </div>
            {
              awardsDetails.map((item, ind) => {
                const { spanText, headText, pText } = item
                return <div key={ind} className="award-details lg:flex max-sm:space-y-3 py-12 relative">
                  <p className='text-[18px] !font-normal lg:w-[40%]'>{spanText}</p>
                  <div className="modern-painting w-full m-auto md:flex justify-between max-sm:space-y-3">
                    <div>
                      <h3 className='syne-heading text-[26px]'>
                        <a href="#" className='relative'>{headText}<span className='hover-border-bottom'></span></a>
                      </h3>
                      <p className=''>{pText}</p>
                    </div>
                    <span className='text-[26px] cursor-pointer hover:text-[#f50963]'><AiOutlineArrowRight /></span>
                  </div>
                  <span className='full-border-bottom border'></span>
                </div>
              })
            }
          </div>
          <div className="provide-smart-video max-lg:p-5 max-lg:space-y-5 lg:flex justify-center items-center mb-10 relative">
            <div className="about-smart-video relative z-10 top-0 -right-5 lg:w-[120%]">
              <a className='w-full' href="#"><img src={about_video} alt="" />
                <span className='text-[50px] bg-white p-5 absolute top-[40%] right-[43%] rounded-full z-10 text-[#f50963]'><BsPlayFill /></span>
                <span className='play-btn-animate'></span>
                <span style={{ animationDelay: '0.6s' }} className='play-btn-animate'></span>
              </a>
            </div>
            <div className="about-smart-detail policy-heading lg:w-[160%]">
              <div className="smart-detail-center max-md:p-4 md:p-10 lg:p-28">
                <p>Get in touch with us to see how</p>
                <h2 className='font-bold'>Provide smart and flexible digital services</h2>
                <div className="click-full text-[18px] tracking-wide space-y-8 mt-10">
                  <p>Can I cancel my account at any time?</p>
                  <p>What happens after the license expires?</p>
                  <p>Does Faz have any documentations?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-team">
            <div className="many-talents max-sm:p-5 sm:w-[85%] m-auto">
              <div className="team-head policy-heading sm:flex justify-between mb-10">
                <h1 className='font-bold'>One <span className='text-[#f50963]'>Team</span> ,<br />Many Talents</h1>
                <p className='text-[14px] font-bold text-black flex items-end'><a href="#" className='flex'><span>Join Our Team</span> <span><AiOutlineArrowRight /></span></a></p>
              </div>
              <div className="about-team-member-slider mb-20">
                <AboutMemSlider />
              </div>
            </div>
          </div>
          <div className="autoplay-about mb-5">
            <AboutAutoplay />
          </div>
          <div className="autoplay-about mb-20">
            <AboutAutoplay />
          </div>
        </div>
        <Subscribe />
      </section>
    </>
  )
}

export default About
