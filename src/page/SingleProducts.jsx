import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { productsAll, singlePageProduct } from '../Data'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { CiHeart } from 'react-icons/ci';
import { useGlobalContext } from '../Context';
import SingleFilter from '../Components/SingleFilter';


const SingleProducts = () => {
  const { setCartItem, cartItem, setWish, wish } = useGlobalContext()
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [quentity, setQuentity] = useState(1)
  const [imageIndex, setImageIndex] = useState(0)

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

  useEffect(() => {
    const singleProduct = singlePageProduct.filter((item) => {
      return item.id === id
    })
    setProduct(singleProduct[0].productInfo)
  }, [id])
  if (!product) {
    <h1>data not found</h1>
  }
  let { stock, name, detail, price, cutPrice, sku, category, tags, icon, description, image } = product
  return (
    <section className="single-product-section md:pt-40 pt-20 max-sm:pt-32">
      <div className="single-center sm:w-[85%] m-auto max-sm:px-5">
        <div className="single-product-nav flex items-center text-[14px] text-[#747373] mb-8 space-x-1">
          <span><FaHome /></span>
          <span><a href="#">Home</a></span>
          <span><FaChevronRight /></span>
          <span><a href="#">Products</a></span>
          <span><FaChevronRight /></span>
          <span><a href="#">App Watch</a></span>
          <span><FaChevronRight /></span>
          <span>Apple Watch Series 7</span>
        </div>

        <div className="full-info-single-product">
          <div className="product-detail lg:flex max-lg:space-y-10">
            <div className="product-image">
              <img className='w-[676px] h-[575px] max-sm:h-[400px]' src={image ? image[imageIndex] : ''} alt="" />
              <div className="btn-img flex justify-between space-x-2 mt-8">
                {image ?
                  image.map((im, ind) => {
                    return <button onClick={() => setImageIndex(ind)} key={ind}><img className='w-[110px] h-[110px]' src={im} alt="" /></button>
                  })
                  : ''
                }
              </div>
            </div>
            <div className="product-sell lg:ml-32">
              <p className='py-1 px-3 border text-red-500 w-[130px] text-center'>{stock} in Stock</p>
              <h2 className='font-semibold text-[34px] my-8'>{name}</h2>
              <p>{detail}</p>
              {cutPrice ? <h4 className='text-[24px] font-bold my-8'><span className='line-through mr-2 text-[#999]'>{cutPrice}</span>{price}</h4> : <h4 className='text-[24px] font-bold my-8'>{price}</h4>}
              <div className='border w-[150px] space-x-3 p-3 wish-table-btn text-center'>
                <button onClick={() => { quentity > 1 ? setQuentity(quentity - 1) : setQuentity(1) }} className='hover:text-[#f50963]'><FaMinus /></button>
                <span>{quentity}</span>
                <button onClick={() => { quentity < 5 ? setQuentity(quentity + 1) : setQuentity(5) }} className='hover:text-[#f50963]'><FaPlus /></button>
              </div>
              <div className="cart-wish flex space-x-2 my-10">
                <button onClick={() => addCartBtnHandle(id)} className='flex items-center py-4 px-10 bg-black text-white font-semibold'><FiShoppingCart className='mr-2' />Add To Cart</button>
                <button onClick={() => handleAddWish(id)} title='Add to Wishlist' className='flex items-center py-1 px-4 border font-semibold text-[25px]'><CiHeart /></button>
              </div>
              <hr />
              <p className='mt-10'><span className='font-bold'>SKU:</span>{sku}</p>
              <p><span className='font-bold'>Categories:</span>
                {category ?
                  category.map((category, ind) => {
                    return <span key={ind} className='hover:text-[#f50963]'><a href="#">{`${category},`}</a></span>
                  })
                  : ''
                }
              </p>
              <p className='my-3'><span className='font-bold'>Tags:</span>
                {tags ?
                  tags.map((tag, ind) => {
                    return <span key={ind} className='border px-2 hover:bg-[#f50963] hover:text-white'><a href="#">{tag}</a></span>
                  })
                  : ''
                }
              </p>
              <p className='flex items-center'><span className='font-bold'>Share:</span>
                {icon ?
                  icon.map((Icon, ind) => {
                    return <span key={ind} className='ml-2 hover:text-[#f50963]'><a href="#">{<Icon />}</a></span>
                  })
                  : ''
                }
              </p>
            </div>
          </div>
          <div className="description my-20">
            <p className='mb-5 text-black font-bold'>Description</p>
            <hr />
            <h2 className='font-semibold text-[34px] my-8 mt-16'>{name}</h2>
            <div className="describe text-[18px] mt-10">
              <p>{description}</p>
            </div>
          </div>
        </div>
      <div className="single-filter">
        <div className="head-related">
          <h3>Related Products</h3>
        </div>
        <SingleFilter {...product} id={id}/>
      </div>
      </div>
    </section>
  )
}

export default SingleProducts
