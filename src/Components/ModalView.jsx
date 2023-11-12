import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FiLink, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context';
import { productsAll } from '../Data';

const ModalView = () => {
  const { isModalOpen, closeModal, modalObj, setCartItem, cartItem, setWish, wish } = useGlobalContext()
  const [imageIndex, setImageIndex] = useState(0)
  const [quentity, setQuentity] = useState(1)

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

  

  let { name, detail, price, cutPrice, sku, category, tags, icon, description, image } = modalObj.productInfo
  return (
    <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
      <div className="modal-container lg:w-[80%] xl:h-[90vh]">
        <div className="modal-area p-10">
          <div className="lg:flex max-lg:space-y-10">
            <div className="modal-img-area">
              <img className='w-[507px] lg:h-[465px] m-auto max-sm:h-[400px]' src={image ? image[imageIndex] : ''} alt="" />
              <div className="btn-img space-x-2 mt-8">
                {image ?
                  image.map((im, ind) => {
                    return <button onClick={() => setImageIndex(ind)} key={ind}><img className='w-[90px] h-[110px] m-auto' src={im} alt="" /></button>
                  })
                  : ''
                }
              </div>
            </div>
            <div className="modal-detail lg:pl-20 text-start">
              <h2 className='font-semibold text-[34px] my-8 shop-font'>{name}</h2>
              <p className='shop-font'>{detail}</p>
              {cutPrice ? <h4 className='text-[17px] font-bold my-8'><span className='line-through mr-2 text-[#999]'>{cutPrice}</span>{price}</h4> : <h4 className='text-[17px] text-[#5e5d5d] font-bold my-8'>{price}</h4>}
              <div className='border w-[150px] space-x-3 p-3 wish-table-btn text-center'>
                <button onClick={()=>{quentity >1? setQuentity(quentity-1):setQuentity(1)}} className='hover:text-[#f50963]'><FaMinus /></button>
                <span>{quentity}</span>
                <button onClick={()=>{quentity < 5? setQuentity(quentity + 1):setQuentity(5)}} className='hover:text-[#f50963]'><FaPlus /></button>
              </div>
              <div className="cart-wish flex space-x-2 my-10">
                <button onClick={() => addCartBtnHandle(modalObj.id)} className='flex items-center py-4 px-10 bg-black text-white font-semibold'><FiShoppingCart className='mr-2' />Add To Cart</button>
                <button onClick={() => handleAddWish(modalObj.id)} title='Add to Wishlist' className='flex items-center py-1 px-4 border font-semibold text-[25px]'><CiHeart /></button>
                <button title='Product Details' className='flex items-center py-1 px-4 border font-semibold text-[25px]'><Link to={`/product-details/${modalObj.id}`}><FiLink /></Link></button>
              </div>
              <hr />
              <p className='mt-10'><span className='font-bold shop-font'>SKU:</span>{sku}</p>
              <p><span className='font-bold shop-font'>Categories:</span>
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
                    return <span key={ind} className='border px-2 hover:bg-[#f50963] ml-2 hover:text-white'><a href="#" className='text-[14px]'>{tag}</a></span>
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
        </div>
        <button className='close-modal-btn' onClick={closeModal}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  )
}

export default ModalView
