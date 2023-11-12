import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CiHeart } from 'react-icons/ci';
import { AiOutlineEye } from 'react-icons/ai';
import { FiLink, FiShoppingCart } from 'react-icons/fi';
import { useGlobalContext } from '../Context'
import { productsAll } from '../Data'

const SingleFilter = (product) => {
    const [filteredProduct, setFilteredProduct] = useState()
    const { id } = useParams()
    const { wish, setWish, openModal, cartItem, setCartItem } = useGlobalContext()

    const handleAddWish = (id) => {
        const newWishList = productsAll.find((item) => item.id === id)
        setWish([...wish, newWishList])
    }
    const addCartBtnHandle = (id) => {
        const productExist = cartItem.find((item) => item.id === id)
        if (productExist) {
            setCartItem(cartItem.map((item) => item.id === id ? { ...productExist, amount: productExist.amount + 1 } : item))
        } else {
            const newCartProduct = productsAll.find((product) => product.id === id)
            setCartItem([...cartItem, newCartProduct])
        }
    }
    useEffect(() => {
        const newProducts = productsAll.filter((item) => {
            if (item.id === product.id) {
                const temp = productsAll.map((products) => {
                })
                return temp
            }
        })
        setFilteredProduct(newProducts)
    }, [product])
    return (
        <div className="product-cart grid md:grid-cols-2 lg:grid-cols-4">
            {filteredProduct ?
                filteredProduct.map((product) => {
                    const { id, info, price, image, cutPrice } = product
                    return <div key={id} className="cart p-3 my-5">
                        <div className="cart-image relative overflow-hidden cursor-pointer">
                            <Link to={`/product-details/${id}`}><img onClick={window.scrollTo(0,0)} className='w-full' src={image} alt="" /></Link>
                            <div className="product-icons flex flex-col space-y-1 text-[23px]">
                                <span onClick={() => handleAddWish(id)} className='border bg-white p-2 hover:text-white' title='Add To Wishlist'><CiHeart /></span>
                                <span onClick={() => openModal(id)} className='border bg-white p-2 hover:text-white' title='Quick View'><AiOutlineEye /></span>
                                <span className='border bg-white p-2 hover:text-white' title='Product Details'><Link to={`/product-details/${id}`}><FiLink /></Link></span>
                            </div>
                            <button onClick={() => addCartBtnHandle(id)} className='text-center hover:bg-[#f50963] font-semibold py-3 px-5 w-full text-white flex justify-center' ><span className='text-white mr-2 text-[21px]'><FiShoppingCart /></span><span>Add To Cart</span></button>
                        </div>
                        <div className="cart-details mt-2">
                            <p>{info}</p>
                            {cutPrice ? <p className="cart-price"><span className='line-through mr-2'>{cutPrice}</span>${price}</p> : <p className="cart-price">${price}</p>}
                        </div>
                    </div>
                }) : ''
            }
        </div>
    )
}

export default SingleFilter
