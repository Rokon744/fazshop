import React, { useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FiShoppingCart, FiLink } from 'react-icons/fi';
import { CiHeart } from 'react-icons/ci';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context';
import { productsAll } from '../Data';

const SimpleGrid = ({ id, info, price, image, cutPrice }) => {
    const { setCartItem, cartItem, setWish, wish, openModal } = useGlobalContext()
    const [addedWish, setAddedWish] = useState(false)

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
    return (
        <>
            <div className="simple-product border my-5 mx-4">
                <div className="lg:flex justify-between items-center">
                    <img className='lg:w-[305px] w-full max-lg:h-[400px] lg:h-[325px]' src={image} alt={info} />
                    <div className="product-info lg:pl-20 max-lg:m-4">
                        <div className="star">
                            <ul className='flex text-[#ffb21d]'>
                                <li><AiFillStar /></li>
                                <li><AiFillStar /></li>
                                <li><AiFillStar /></li>
                                <li><AiFillStar /></li>
                                <li><AiOutlineStar /></li>
                            </ul>
                        </div>
                        <h4><Link to={`/product-details/${id}`}>{info}</Link></h4>
                        <p className='text-[18px] my-3 font-semibold'>${price}</p>
                        <p className='text-[14px]'>Shop Faz.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p>
                        <div className="flex mt-8 space-x-1">
                            <button onClick={() => addCartBtnHandle(id)} className='flex items-center py-2 px-6 border hover:bg-[#f50963] hover:text-white font-semibold'><FiShoppingCart className='mr-2' />Add To Cart</button>
                            <button onClick={() => handleAddWish(id)} className='border text-[20px] px-1 lg:py-2 hover:bg-[#f50963] hover:text-white lg:px-3 lg:text-[24px]' title='Add To Wishlist'><CiHeart /></button>
                            <button onClick={() => openModal(id)} className='border text-[20px] px-1 lg:py-2 hover:bg-[#f50963] hover:text-white lg:px-3 lg:text-[24px]' title='Quick View'><AiOutlineEye /></button>
                            <button className='border text-[20px] px-1 lg:py-2 hover:bg-[#f50963] hover:text-white lg:px-3 lg:text-[24px]' title='Product Details'><Link to={`/product-details/${id}`}><FiLink /></Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimpleGrid