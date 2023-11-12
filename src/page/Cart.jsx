import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import empty_cart from '../img/empty-cart.webp'
import { GiReturnArrow } from 'react-icons/gi';
import { useGlobalContext } from '../Context';
import CartItem from '../Components/CartItem';

const Cart = () => {
  const { cartItem, inTotal } = useGlobalContext()
  const {total} = inTotal()

  return (
    <section className="section-wishlist pt-20">
      <div className="wishlist-head policy-heading text-center bg-slate-100 py-24">
        <h1 className='font-bold'>My Cart</h1>
        <p><span className='text-black'><Link to='/'>Home</Link></span> . Cart</p>
      </div>
      {cartItem.length <= 0 ?
        <div className="wishlist-center max-sm:p-5 sm:w-[85%] m-auto my-28 text-center">
          <img className='m-auto' src={empty_cart} alt="cart empty" />
          <p>Your Cart is empty</p>
          <button className='py-2 px-5 bg-slate-100 mt-3 hover:bg-black transition-all ease-in duration-150 hover:text-white'><Link to='/shop'>Go to Shop</Link></button>
        </div>
        : ''
      }
      {cartItem.length > 0 ?
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
            {cartItem.map((item) => {
              return <CartItem key={item.id} {...item} />
            })}
          </table>
        </div>
        : ''
      }
      {
        cartItem.length > 0 ?
        <div className="cart-totals mt-12 max-sm:p-5 sm:w-[85%] m-auto">
        <div className="cart-total-box md:w-[550px] ml-auto">
          <h3 className='text-[25px] font-bold policy-heading mb-7'>Cart Totals</h3>
          <div className="subtotal flex justify-between border py-3 px-5 text-[15px]">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="subtotal flex justify-between border py-3 px-5 text-[15px]">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className='py-4 px-8 bg-[#f50963] mt-5 text-white policy-heading font-semibold'><Link to='/login'>Proceed to cheackout</Link></button>
        </div>
      </div>:''
      }
      
    </section>
  )
}

export default Cart
