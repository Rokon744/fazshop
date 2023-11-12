import React, { useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsChevronDown, BsGrid, BsList, BsChevronCompactDown, BsChevronCompactRight, BsSearch } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import { FiLink, FiShoppingCart } from 'react-icons/fi';
import { Link, useSearchParams } from 'react-router-dom';
import { brands, categories, colorFilter, priceFilter, subCategories } from '../category';
import ModalView from '../Components/ModalView';
import SimpleGrid from '../Components/SimpleGrid';
import { useGlobalContext } from '../Context';
import Subscribe from '../Components/Subscribe'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { productsAll } from '../Data';
import Pagination from '../Components/Pagination';

const Shop = () => {
  const [openDrop, setOpenDrop] = useState(false)
  const [grid, setGrid] = useState('GRID')
  const [show, setShow] = useState(0)
  const [bShow, setbShow] = useState(true)
  const [colorFilterShow, setColorFilterShow] = useState(true)
  const [priceFilterShow, setPriceFilterShow] = useState(true)
  const { setWish, wish, openModal, setCartItem, cartItem, currentItems, setCurrentItems } = useGlobalContext()
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItem = currentItems.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [searchParams] = useSearchParams();

  const addCartBtnHandle = (id) => {
    const productExist = cartItem.find((item) => item.id === id)
    if (productExist) {
      setCartItem(cartItem.map((item) => item.id === id ? { ...productExist, amount: productExist.amount + 1 } : item))
    } else {
      const newCartProduct = productsAll.find((product) => product.id === id)
      setCartItem([...cartItem, newCartProduct])
    }
  }

  const handleAddWish = (id) => {
    const newWishList = productsAll.find((item) => item.id === id)
    setWish([...wish, newWishList])
  }

  const handleGridCol = () => {
    setGrid('GRID')
    let gridBtn = document.querySelectorAll('.grid-btn')
    gridBtn[0].classList.add('active')
    gridBtn[1].classList.remove('active')
  }
  const handleSimpleCol = () => {
    setGrid('SIMPLE')
    let gridBtn = document.querySelectorAll('.grid-btn')
    gridBtn[1].classList.add('active')
    gridBtn[0].classList.remove('active')
  }

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
  const handleColorFilter = (slug) => {
    const newFilterProduct = productsAll.filter((item) => {
      if (item.color) {
        let filt = item.color.find(data => slug === data)
        if (slug === filt) {
          return item
        }
      }
    })
    setCurrentItems(newFilterProduct)
  }
  const brandFilterProduct = (slug) => {
    const newFilterProduct = productsAll.filter((item) => {
      if (slug === item.brands) {
        return item
      }
    })
    setCurrentItems(newFilterProduct)
  }
  const handleFilterPrice = ({ min, maxp }) => {
    console.log(min, maxp)
    const newFilterProduct = productsAll.map((product) => {
      if (min < product.price && maxp > product.price) {
        return product
      }
    })
    console.log(newFilterProduct)
  }
  const toggleBtn = (i) => {
    if (show == i) {
      return setShow(null)
    }
    setShow(i)
  }

  const lowToHighPrice= ()=>{
    // const tempCurr = currentItems.map((item)=>{
    //   return item.sort('price')
    // })
    // console.log(tempCurr)
  }
  useEffect(() => {
    let gridBtn = document.querySelectorAll('.grid-btn')
    gridBtn[0].classList.add('active')
    gridBtn[1].classList.remove('active')
  })
  return (
    <section className="section-shop pt-28">
      <div className="shop-center sm:w-[85%] m-auto max-sm:p-5 mb-20">
        <div className="single-product-nav shop-font flex items-center text-[14px] text-[#747373] mb-8 space-x-1 font-medium">
          <span><FaHome /></span>
          <span><a href="#">Home</a></span>
          <span><FaChevronRight /></span>
          <span>Products</span>
        </div>
        <div className="shop-nav md:flex justify-between items-center border p-5 shop-font">
          <div className="show-length">
            <p>Showing <span>{currentItems.length}</span> of 27 results</p>
          </div>
          <div className="shop-last-nav flex space-x-4">
            <button onClick={handleGridCol} className="grid-btn text-[23px]">
              <BsGrid />
            </button>
            <button onClick={handleSimpleCol} className="grid-btn text-[26px]">
              <BsList />
            </button>
            <div className="div">
              <div className="dropDown relative text-[14px]">
                <p onClick={() => setOpenDrop(!openDrop)} className='border p-2 w-[200px]'><button className='flex justify-between space-x-2 items-center'><span>Short filtering</span> <span><BsChevronDown /></span></button></p>
                {openDrop ?
                  <ul className='absolute w-[200px] border p-3 space-y-2 text-[#625e5e] z-10'>
                    <li>Short Filtering</li>
                    <li className='cursor-pointer' onClick={() => setCurrentItems(productsAll.slice(20, 27))}>Latest Products</li>
                    <li onClick={()=>lowToHighPrice()}>Price Low To high</li>
                    <li>Price high to low</li>
                  </ul> : ''}
              </div>
            </div>
          </div>
        </div>
        <ModalView />
        <div className="main-shop lg:flex flex-row-reverse justify-between">
          <div className="shop-product w-full">
            <div className="product-cart grid md:grid-cols-2 lg:grid-cols-3">
              {grid === 'GRID' ?
                currentItem.map((product) => {
                  const { id, info, price, image, cutPrice } = product
                  return <div key={id} className="cart p-3 my-5">
                    <div className="cart-image relative overflow-hidden cursor-pointer">
                      <Link to={`/product-details/${id}`}><img className='w-full' src={image} alt="" /></Link>
                      <div className="product-icons flex flex-col space-y-1 text-[23px]">
                        <span onClick={() => handleAddWish(id)} className='border bg-white p-2 hover:text-white' title='Add To Wishlist'><CiHeart /></span>
                        <span onClick={() => openModal(id)} className='border bg-white p-2 hover:text-white' title='Quick View'><AiOutlineEye /></span>
                        <span className='border bg-white p-2 hover:text-white' title='Product Details'><Link to={`/product-details/${id}`}><FiLink /></Link></span>
                      </div>
                      <button onClick={() => addCartBtnHandle(id)} className='text-center hover:bg-[#f50963] font-semibold py-3 px-5 w-full text-white flex justify-center' ><span className='text-white mr-2 text-[21px]'><FiShoppingCart /></span><span>Add To Cart</span></button>
                    </div>
                    <div className="cart-details mt-2">
                      <p className='text-black hover:text-[#f50963]'><Link to={`/product-details/${id}`}>{info}</Link></p>
                      {cutPrice ? <p className="cart-price"><span className='line-through mr-2'>{cutPrice}</span>${price}</p> : <p className="cart-price">${price}</p>}
                    </div>
                  </div>
                }) : ''
              }
            </div>
            <div className="dov">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
            <div className="simple-grid w-full md:grid md:grid-cols-2 lg:grid-cols-1 mt-16">
              {grid === 'SIMPLE' ?
                currentItems.map((item) => {
                  return <SimpleGrid key={item.id} {...item} />
                }) : ""
              }
            </div>
          </div>
          <div className="shop-navigation lg:w-[400px] mt-16">
            <div className="category-filter space-y-3 mr-10">
              {
                categories.map((item, index) => {
                  return <div key={item.id}>
                    <div onClick={() => toggleBtn(index)} className='text-[16px] font-normal text-[#000000] flex justify-between items-center cursor-pointer'>
                      <p className={show === index ? 'text-[#f50963] policy-heading' : 'hover:text-[#f50963]'}>{item.name}</p>
                      <span>{show === index ? <BsChevronCompactDown /> : <BsChevronCompactRight />}</span>
                    </div>
                    {subCategories.map((subCat, ind) => {
                      if (item.id === subCat.catId) {
                        return <li onClick={() => { searchFilterProduct(subCat.slug) }} key={subCat.id} className={show === index ? 'w-full my-3 ml-2 h-[20px] transition-all ease-in duration-300' : 'w-full h-[0px] overflow-hidden transition-all ease-in duration-300'}><Link to={`/shop?category=${subCat.slug}`}>{subCat.name}</Link></li>
                      }
                    })}
                  </div>
                })
              }
            </div>
            <div className="brands-filter mt-8">
              <button onClick={() => setbShow(!bShow)} className='text-[17px] w-[87%] shop-font flex justify-between items-center'>
                <span>Brands</span>
                <span>{bShow ? <BsChevronCompactDown /> : <KeyboardArrowUpIcon />}</span>
              </button>
              <form action="#" method='get' className={bShow ? 'h-[200px] mt-10 transition-all ease-in duration-300' : 'h-[0px] transition-all ease-in duration-300'}>
                {bShow && <div className="input-area relative">
                  <input className='border p-3' type="text" placeholder='search brands' />
                  <p className='absolute top-4 right-16'><BsSearch /></p>
                </div>}
                <div className={bShow ? 'brand mt-7 h-[170px] overflow-auto w-[85%]' : 'overflow-hidden h-0'}>
                  {
                    brands.map((itemBrand, index) => {
                      return <div key={itemBrand.id} className="leevel">
                        <Link to={`/shop?brands=${itemBrand.slug}`}>
                          <button onClick={() => brandFilterProduct(itemBrand.slug)}>
                            <input className='w-[20px]' id='checker' type="checkbox" />
                            <label className='text-[#636262] text-[14px]' htmlFor="checker">{itemBrand.name}</label>
                          </button>
                        </Link>
                      </div>
                    })
                  }
                </div>
              </form>
            </div>
            <div className="color-filter mt-12">
              <button onClick={() => setColorFilterShow(!colorFilterShow)} className='flex justify-between items-center w-[87%] hover:text-[#f50963]'>
                <span className='shop-font'>Color</span>
                <span>{colorFilterShow ? <BsChevronDown /> : <KeyboardArrowUpIcon />}</span>
              </button>
              <div className={colorFilterShow ? 'color-filter-center space-y-3 h-[167px] overflow-y-auto w-[85%] mt-7 transition-all ease-in duration-200' : 'h-0 overflow-hidden transition-all ease-in duration-200'}>
                {
                  colorFilter.map((color) => {
                    const { id, name, slug, colorCode } = color
                    return <p onClick={() => handleColorFilter(slug)} key={id} className='relative'>
                      <span style={{ background: `#${colorCode}` }} className={`!w-[20px] !h-[20px] mr-3 rounded-full absolute`}></span>
                      <Link className='ml-8' to={`/shop?color=${slug}`}>{name}</Link>
                    </p>
                  })
                }
              </div>
            </div>
            <div className="price-filter mt-12">
              <div className="price-filter-main">
                <button onClick={() => setPriceFilterShow(!priceFilterShow)} className='flex justify-between items-center w-[87%] hover:text-[#f50963]'>
                  <span className='shop-font'>Price</span>
                  <span>{priceFilterShow ? <BsChevronDown /> : <KeyboardArrowUpIcon />}</span>
                </button>
                <form action="#" method='get'>
                  <div className={priceFilterShow ? 'h-[100px] mt-3 transition-all ease-in duration-200' : 'h-0 overflow-hidden transition-all ease-in duration-200'}>
                    {
                      priceFilter.map((pricminMax) => {
                        const { id, minPrice, max } = pricminMax
                        return <Link onClick={() => handleFilterPrice({ min: minPrice, maxp: max })} key={id} to={`/shop?priceMin=${minPrice}&max=${max}`} className='flex'>
                          <input className='w-[20px]' type="checkbox" id='minMax' />
                          <label className='ml-3' htmlFor="minMax"><p>{minPrice ? `$${minPrice}-$${max}` : `$${max}+`}</p></label>
                        </Link>
                      })
                    }
                  </div>
                </form>
              </div>
            </div>
            <div className="reset-bt mt-9">
              <button onClick={() => setCurrentItems(productsAll)} className='policy-heading font-bold text-[16px] bg-[#f50963] w-[85%] py-4 text-white'>Reset Filter</button>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </section>
  )
}

export default Shop
