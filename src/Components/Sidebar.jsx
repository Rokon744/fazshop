import React from 'react'
import logo from '../img/FazLogo.png'
import { RxCross1 } from 'react-icons/rx';
import { AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';
import backg from '../img/offcanvas-shape-1.webp'

import { useGlobalContext } from '../Context';
import { Link } from 'react-router-dom';
import { navMenu, socialIcon } from '../Data';



const Sidebar = () => {
    const { openSidebar, setOpenSidebar, openDropdown, setOpenDropdown } = useGlobalContext()
    return (
        <div className='section-sidebar bg-white'>
            <div className={`${openSidebar ? 'md:w-[92%] m-auto flex lg:hidden flex-row justify-between items-center p-3 show-sidebar' : 'sidebar'}`}>
                <div className="sidebar-logo">
                    <img className='w-[36px] ml-4 mt-4' src={logo} alt="logo" />
                </div>
                <button className='toggler text-[20px] rounded-full border p-3' onClick={() => setOpenSidebar(false)}>
                    <RxCross1 />
                </button>
            </div>
            <ul className='navbar-fonts-responcive lg:flex flex-row justify-start mt-3'>
                <li className='xl:ml-[30px] ml-[30px]'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='ml-[30px]'>
                    <Link to='/about'>About Us</Link>
                </li>
                <li className='ml-[30px]'>
                    <Link to='/shop'>Shop</Link>
                </li>
                <div className='ml-[25px] dropdown-menu'>
                    <Link className='flex justify-between' to='/about'><span>Page</span> <span onClick={() => setOpenDropdown(!openDropdown)} className='text-[25px] mr-4 border p-1 dropdownBtn'><AiOutlinePlus /></span></Link>
                    <div className={`${openDropdown ? 'dorpdown' : 'hidden'}`}>
                        <ul className=' w-full p-3 bg-white pr-10' >
                            {
                                navMenu.map((navItem, ind) => {
                                    const { link, name } = navItem
                                    return <li key={ind} className='w-auto'>
                                        <Link to={link}>{name}</Link>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <li className='ml-[30px]'>
                    <Link to='/contact'>Contact Us</Link>
                </li>
                <div className="st p-6 text-black">
                    <button className='text-[14px] py-3 px-5 border mt-10 outline-1 start-btn '><Link className='flex '>Getting Started <span className='mt-1 ml-2'><AiOutlineRight /></span></Link></button>
                </div>
            </ul>
            <div className="social-icon mt-20 p-7 mb-5">
                <h3>Follow:</h3>
                {
                    socialIcon.map((Icon, ind) => {
                        return <button key={ind} className='toggler mx-1 border p-2'>{<Icon />}</button>
                    })
                }

            </div>
            <hr />
            <div className='backgroundImg w-[100%] h-auto relative overflow-hidden'>
                <img className='h-[280px] w-full -top-40 absolute' src={backg} alt="" />
                <div className="futter-nav p-5">
                    <a href="#" className='relative'><h3>+964 742 44 763</h3></a>
                    <a href="#" className='relative'>info@fazgroupltd.com</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
