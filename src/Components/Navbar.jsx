import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/FazLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import { BiUser, BiHeart, BiCart } from 'react-icons/bi';
import { useGlobalContext } from '../Context';
import Sidebar from './Sidebar';
import { navMenu } from '../Data';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

const Navbar = () => {
  const { openSidebar, setOpenSidebar, wish, inTotal } = useGlobalContext()
  const [navTop, setNavtop] = useState(false)
  const {amount} = inTotal()

  window.addEventListener('scroll',()=>{
    if(window.scrollY > 0){
      setNavtop(true)
    }else{
      setNavtop(false)
    }
  })
  return (
    <section className='bg-lime-50'>
      <nav className={`${openSidebar ? 'hidden' : 'w-[100%] md:px-16 m-auto flex flex-row justify-between items-center px-10 nav-style-top fixed'} ${navTop? 'py-3 nav-shadow bg-lime-50 transition-all ease-in duration-150':'py-5 z-50 border'}`}>
        <div className="logo flex1">
          <Link to={`/`}>
            <img className='w-[42px] max-lg:w-[30px]' src={logo} alt="Logo" />
          </Link>
        </div>
        {/* navbar-item */}
        <div className="main-menu flex justify-between lg:w-[100%]  ml-[35px] overflow-hidden">
          <ul className='navbar-fonts lg:flex flex-row justify-start hidden '>
            <li className='xl:ml-[30px] ml-[30px]'>
              <Link to='/'>Home</Link>
            </li>
            <li className='ml-[30px]'>
              <Link to='/about'>About Us</Link>
            </li>
            <li className='ml-[30px]'>
              <Link to='/shop'>Shop</Link>
            </li>
            <li className='ml-[30px] dropdown-menu overflow-hidden'>
              <div className="dropdown">
                <Link to='/about'>Page</Link>
              </div>
              <div className="dropdown-content">
                <ul className=' w-[200px] p-5 bg-white mt-5 space-y-2' >
                  {/* DropDown Menu bar */}
                  {
                    navMenu.map((navItem, ind) => {
                      const { name, link } = navItem
                      return <li key={ind} className='w-auto relative'>
                        <Link to={link}>{name}</Link>
                      </li>
                    })
                  }
                </ul>
              </div>
            </li>
            <li className='ml-[30px]'>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>

        </div>
        <div className="search-box flex flex-row">
          <form action="#" method='get' className='xl:flex flex-row hidden mr-[35px] bg-white'>
            <input className={navTop?'bg-white':'bg-white outline-none'} type="text" name="search" id="search" placeholder='Search for products...' />
            <label htmlFor="search" className='mr-2 mt-1 text-[#999]'><SearchIcon /></label>
          </form>
          <button className='lg:flex flex-row hidden text-[#514c4c]'>
            <Link to='/login'><BiUser className='text-[25px] mt-2 ml-3' /></Link>
            <Link className='relative' to='/wishlist'><BiHeart className='text-[25px] mt-2 ml-3' />
              <span className='absolute w-[23px] h-[23px] text-[12px] bg-[#f50963] rounded-full m-auto text-white flex items-center justify-center top-0 -right-3 border-2'>{wish.length}</span>
            </Link>
            <Link className='relative' to='/cart'><BiCart className='text-[25px] mt-2 ml-3' />
              <span className='absolute w-[23px] h-[23px] text-[12px] bg-[#f50963] rounded-full m-auto text-white flex items-center justify-center top-0 -right-3 border-2'>{amount}</span>
            </Link>
          </button>
        </div>

        {/* nav collapse btn */}
        <div onClick={() => setOpenSidebar(true)} className="btn-area cursor-pointer lg:hidden mt-3">
          <button className='humbager-btn relative cursor-pointer w-[40px] h-[30px]'>
            <span className='absolute w-[25px] h-[1.5px] bg-black top-1 left-0'></span>
            <span className='absolute w-[13px] h-[2px] bg-black top-3 left-2'></span>
            <span className='absolute w-[25px] h-[2px] bg-black top-5 left-2'></span>
          </button>
        </div>
      </nav>
      {
        openSidebar ? <Sidebar /> : ''
      }
    </section>
  )
}

export default Navbar
