import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, subCategories, subCategoriesFutter } from '../category'
import { useGlobalContext } from '../Context'
import { company, productsAll, shop, socialIcon, support } from '../Data'
import logo from '../img/FazLogo.png'
import footerPay from '../img/footer-payment.webp'
import { BsChevronCompactDown, BsChevronCompactRight } from 'react-icons/bs';

const Futter = () => {
  const { setCurrentItems } = useGlobalContext()

  const searchFilterProduct = (slug) => {
    const newFilterProduct = productsAll.filter((item) => {
      if (item.tags) {
        let filt = item.tags.find(data => slug === data)
        if (slug === filt) {
          return item
        }
      }
    })
    setCurrentItems(newFilterProduct)
  }

  return (
    <section className='bg-white'>
      <div className="section-center lg:flex grid md:grid-cols-3 justify-between items-start md:space-y-0 space-y-[50px] mx-5 sm:mx-20 my-20">
        <div className="logo-icon">
          <div className="logo mb-3">
            <img className='w-[30px]' src={logo} alt="" />
          </div>
          <p className='w-[200px]'>The home and elements needed to create beautiful products.</p>
          <ul className=' flex futterSocialIcon'>
            {
              socialIcon.map((Icon, ind) => {
                return <li key={ind} className='p-2'><a href=''>{<Icon />}</a></li>
              })
            }
          </ul>
        </div>
        <div className='company-area'>
          <h4>Company</h4>
          <ul className='mt-8 space-y-1'>
            <li><Link to={'/about'}>About us</Link></li>
            {
              company.map((item, ind) => {
                return <li key={ind}><a href="#">{item}</a></li>
              })
            }
          </ul>
        </div>
        <div className="category-filter space-y-3 mr-10">
          <h4 className='mb-8'>Shop</h4>
          <ul className='mt-8 space-y-1'>
          {
            subCategoriesFutter.map((item, ind)=>{
              return <li key={ind} onClick={()=>{searchFilterProduct(item.slug)}}><Link to={`shop?category=${item.name}`}>{item.name}</Link></li>
            })
          }
          </ul>
        </div>
        {/* <div className="shop-area">
          <h4>Shop</h4>
          <ul className='mt-8 space-y-1'>
            {
              shop.map((item, ind)=>{
                return <li key={ind}><a href="#">{item}</a></li>
              })
            }
          </ul>
        </div> */}
        <div className='contact-area mt-0 md:mt-10'>
          <h4>Support</h4>
          <ul className='mt-8 space-y-1'>
            {
              support.map((item, ind) => {
                const { link, name } = item
                return <li key={ind}><Link to={link}>{name}</Link></li>
              })
            }
          </ul>
        </div>
        <div className='contact-area mt-0 md:mt-10'>
          <h4 className='mb-8'>Talk to us</h4>
          <ul className='mb-6'><li>Find a location nearest you. <br />
            See <span className='underline'><a href="#">Our Stores</a></span></li></ul>
          <h4><a href="#">+624 423 26 72</a></h4>
          <ul><li><a href="#">support@Faz.com</a></li></ul>
        </div>
      </div>
      <div className="futter-end md:flex justify-between items-center px-20 py-10 max-md:space-y-4">
        <p>Copyright © 2023 by <span><a href="#">Fazgroupltd</a></span> All rights reserved.</p>
        <img src={footerPay} alt="" />
      </div>
    </section>
  )
}

export default Futter