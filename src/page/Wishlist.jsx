import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import empty_cart from '../img/empty-cart.webp'
import { GiReturnArrow } from 'react-icons/gi';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useGlobalContext } from '../Context';


const Wishlist = () => {
  const { wish, setWish, removeWishItem, setCartItem, cartItem } = useGlobalContext()

  const increaseDecrease = (id, type) => {
    const newWishItem = wish.map((item) => {
      if (item.id === id) {
        if (type == 'inc') {
          return {
            ...item,
            amount: item.amount < 5 ? item.amount + 1 : 5,
            total: item.amount + 1,
            totalPrice: item.amount < 5 ? (item.amount + 1) * item.price : 5 * item.price
          };
        } else {
          return {
            ...item,
            amount: item.amount > 0 ? item.amount - 1 : 1,
            total: item.amount - 1,
            totalPrice: (item.amount - 1) * item.price
          };
        }
      }
      return item;
      console.log(item);
    });
    setWish(newWishItem)
    setCartItem(newWishItem)
  }


  return (
    <section className="section-wishlist pt-20">
      <div className="wishlist-head policy-heading text-center bg-slate-100 py-24">
        <h1 className='font-bold'>My Wishlist</h1>
        <p><span className='text-black'><Link to='/'>Home</Link></span> . Wishlist</p>
      </div>
      {wish.length <= 0 ?
        <div className="wishlist-center max-sm:p-5 sm:w-[85%] m-auto my-28 text-center">
          <img className='m-auto' src={empty_cart} alt="cart empty" />
          <p>Your Cart is empty</p>
          <button className='py-2 px-5 bg-slate-100 mt-3 hover:bg-black transition-all ease-in duration-150 hover:text-white'><Link to='/shop'>Go to Shop</Link></button>
        </div>
        : ''
      }
      {wish.length > 0 ?
        <div className="wishlist-center max-sm:p-5 sm:w-[85%] m-auto my-20 overflow-x-auto">
          <div className="continue-shop bg-slate-100 p-5 policy-heading">
            <p><Link to='/shop' className='flex items-center'>Continue Shopping <span className='ml-3'><GiReturnArrow /></span></Link></p>
          </div>
          <table className='w-full text-center mt-10 min-w-[1200px]'>
            <thead>
              <tr className='p-5'>
                <th>Image</th>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            {
              wish.map((item) => {
                const { id, info, price, amount, image, totalPrice } = item
                return <tbody key={id}>
                  <tr>
                    <td className='w-[140px]'>
                      <img className='w-[125px]' src={image} alt="" />
                    </td>
                    <td className='w-[250px] hover:text-[#f50963]'><Link to={`/product-details/${id}`}>{info}</Link></td>
                    <td>${price}</td>
                    <td>
                      <div className='border space-x-3 w-[50%] m-auto p-3 wish-table-btn'>
                        <button onClick={() => increaseDecrease(id, 'dec')} className='hover:text-[#f50963]'><FaMinus /></button>
                        <span>{amount}</span>
                        <button onClick={() => increaseDecrease(id, 'inc')} className='hover:text-[#f50963]'><FaPlus /></button>
                      </div>
                    </td>
                    <td>${totalPrice? totalPrice.toFixed(2):price}</td>
                    <td>
                      <button onClick={() => removeWishItem(id)} className='text-[25px]'><i className="fa fa-times" aria-hidden="true"></i></button>
                    </td>
                  </tr>
                </tbody>
              })
            }

          </table>
        </div>
        : ''
      }
    </section>
  )
}

export default Wishlist


