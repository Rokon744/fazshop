import React, { useEffect, useState } from 'react'
import { productsAll } from '../Data'
import { CiHeart } from 'react-icons/ci';
import { AiOutlineEye } from 'react-icons/ai';
import { FiLink, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context';
import ModalView from './ModalView';


const HomeProducts = () => {
    const [newProducts, setNewProducts] = useState([])
    const { setCartItem, cartItem, setWish, wish, openModal } = useGlobalContext()

    const addCartBtnHandle = (id) => {
        const productExist= cartItem.find((item)=> item.id === id)
        if(productExist){
            setCartItem(cartItem.map((item)=>item.id===id?{...productExist, amount:productExist.amount + 1}:item))
        } else{
            const newCartProduct = productsAll.find((product) => product.id === id)
            setCartItem([...cartItem, newCartProduct])
        }
    }

    const handleAddWish = (id) => {
        const newWishList = productsAll.find((item) => item.id === id)
        setWish([...wish, newWishList])
    }

    const topRateProduct = (e) => {
        setNewProducts(productsAll.slice(0, 12))
        const button = document.querySelectorAll('.add-remove')
        button[0].classList.add('active')
        button[1].classList.remove('active')
        button[2].classList.remove('active')
    }
    const bestSalingProducts = () => {
        setNewProducts(productsAll.slice(12, 20))
        const button = document.querySelectorAll('.add-remove')
        button[1].classList.add('active')
        button[0].classList.remove('active')
        button[2].classList.remove('active')
    }
    const latestProducts = () => {
        setNewProducts(productsAll.slice(20, 27))
        const button = document.querySelectorAll('.add-remove')
        button[0].classList.remove('active')
        button[1].classList.remove('active')
        button[2].classList.add('active')
    }

    useEffect(() => {
        setNewProducts(productsAll.slice(0, 12))
        const button = document.querySelectorAll('.add-remove')
        button[0].classList.add('active')
        button[1].classList.remove('active')
        button[2].classList.remove('active')
    }, [])
    return (
        <div className='Home-products-center md:p-28 !pb-0 p-5'>
            <div className="home-products-header md:flex justify-between">
                <h2 className='relative text-[30px] pl-5 font-bold'>Popular Products</h2>
                <div className="products-btn-area space-x-4 md:space-x-10">
                    <button className='add-remove relative' onClick={topRateProduct}>Top Rated</button>
                    <button className='add-remove relative' onClick={bestSalingProducts}>Best Salings</button>
                    <button className='add-remove relative' onClick={latestProducts}>Latest Products</button>
                </div>
            </div>
            <ModalView />
            <div className="product-cart grid md:grid-cols-2 lg:grid-cols-4">
                {
                    newProducts.map((product) => {
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
                                <p>{info}</p>
                                {cutPrice ? <p className="cart-price"><span className='line-through mr-2'>{cutPrice}</span>${price}</p> : <p className="cart-price">${price}</p>}
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="home-deal-day md:mt-20 mt-5">
                <div className="home-deal-center md:flex justify-between max-md:space-y-8">
                    <h2 className='relative text-[30px] pl-5 font-bold'>Deal Of The Day</h2>
                    <button className='py-3 px-5 bg-[#f50963] text-white hover:bg-[#6364DB] transition duration-150 ease-in'><Link to='shop'>View All Products</Link></button>
                </div>
            </div>
        </div>
    )
}

export default HomeProducts
